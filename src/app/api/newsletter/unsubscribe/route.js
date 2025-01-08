import { db } from "@/lib/db";
import jwt from "jsonwebtoken";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const token = req.nextUrl.searchParams.get("token");

    if (!token) {
      return new Response("Token manquant", { status: 400 });
    }

    const { email } = jwt.verify(token, process.env.JWT_SECRET);

    await db.newsletter.delete({
      where: { email },
    });

    return new Response(null, {
      status: 302,
      headers: { Location: "/" },
    });
  } catch (error) {
    console.error("Erreur de désabonnement :", error);

    return new Response(null, {
      status: 302,
      headers: { Location: "/" },
    });
  }
}
