import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

import jwt from "jsonwebtoken";

async function sendNewsletterEmail(email) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const unsubscribeToken = jwt.sign({ email }, process.env.JWT_SECRET);

  const unsubscribeUrl = `${process.env.FRONTEND_URL}/Unsubscribe?token=${unsubscribeToken}`;

  const mailOptions = {
    from: `"Adventures" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Bienvenue à la newsletter Adventures",
    html: `

 <div
    style="
      font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f0f4f8;
      border-radius: 10px;
    "
  >
    <div
      style="
        background: linear-gradient(to right, #3b82f6, #14b8a6);
        padding: 30px;
        border-radius: 8px 8px 0 0;
        text-align: center;
        margin-bottom: 20px;
      "
    >
      <h1
        style="
          color: #ffffff;
          margin: 0;
          font-size: 28px;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        "
      >
        Bienvenue chez Adventures!
      </h1>
    </div>

    <div
      style="
        padding: 30px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        line-height: 1.6;
        color: #333333;
      "
    >
      <p style="font-size: 16px; margin-bottom: 20px; ">Bonjour,</p>

      <p style="font-size: 16px; margin-bottom: 20px; ">
        Nous sommes ravis de vous compter parmi nos abonnés ! Vous recevrez
        désormais nos dernières actualités, conseils et offres exclusives
        directement dans votre boîte mail.
      </p>

      <div
        style="
          text-align: center;
          margin: 30px 0;
        "
      >
        <a
          href="${unsubscribeUrl}"
          style="
            display: inline-block;
            padding: 16px 32px;
            background: linear-gradient(to right, #3b82f6, #14b8a6);
            color: white;
            font-size: 18px;
            font-weight: 600;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-decoration: none;
            transition: all 0.3s ease-in-out;
          "
        >
          Se désabonner
        </a>
      </div>

      <p style="font-size: 16px; margin-bottom: 5px;">À bientôt,</p>
      <p style="font-size: 16px; font-weight: bold; color: #3b82f6; ">
        L'équipe de Adventures
      </p>
    </div>

    <div
      style="
        text-align: center;
        padding-top: 20px;
        color: #666;
        font-size: 12px;
      "
    >
      <p>© 2025 Adventures, conçu par Stéphanie MAMINIAINA.</p>
    </div>
  </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    throw new Error("Erreur lors de l'envoi de l'email de confirmation");
  }
}

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      return new NextResponse(JSON.stringify({ message: "Email invalide." }), {
        status: 400,
      });
    }

    const existingEmail = await db.newsletter.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return new NextResponse(
        JSON.stringify({ message: "Cet email est déjà abonné." }),
        { status: 409 }
      );
    }

    await db.newsletter.create({
      data: { email },
    });

    await sendNewsletterEmail(email);

    return new NextResponse(
      JSON.stringify({
        message: "Vous êtes maintenant abonné à la newsletter.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur dans l'API :", error);
    return new NextResponse(
      JSON.stringify({ message: "Erreur interne du serveur." }),
      { status: 500 }
    );
  }
}
