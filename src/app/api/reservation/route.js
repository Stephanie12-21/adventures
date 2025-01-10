import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

async function sendMessageContact(
  nom,
  email,
  phone1,
  phone2,
  adults,
  childrens,
  babies,
  passengers,
  message
) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_USER,
    subject: "Réservation depuis le site Adventures",

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
        Nouvelle réservation depuis votre site Adventures
      </h1>
    </div>

    <div
      style="padding: 30px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        line-height: 1.6;
        color: #333333;
    "
    >
      <p style="font-size: 24px; margin-bottom: 20px;">Bonjour Adventures,</p>

      <p style=" font-size: 16px; margin-bottom: 20px;">
        Vous avez reçu une nouvelle réservation de la part de
        <strong style="color: #3b82f6;">
           ${nom}
        </strong>
      </p>

      <div
        style="
          background-color: #f0f4f8;
          border-left: 4px solid #3b82f6;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 0 8px 8px 0;
      "
      >
        <h2
          style="
            font-size: 18px;
            font-weight: bold;
            color: #3b82f6;
            margin-bottom: 10px;
          "
        >
          Message :
        </h2>
        <p
          style="
            font-size: 16px;
            margin-bottom: 0;
            whiteSpace: pre-wrap;
          "
        >
          ${message}
        </p>
      </div>

      <hr style=" border: 1px solid #e2e8f0; margin: 30px 0;" />

      <h2
        style="
          font-size: 20px;
          font-weight: bold;
          color: #3b82f6;
          margin-bottom: 15px;
        "
      >
        Informations de la réservation :
      </h2>

      <table
        style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          line-height: 1.5;
          font-size: 16px
    "
      >
        <tr>
          <td
            style="
              padding: 8px;
              border-bottom: 1px solid #e2e8f0;
              font-weight: bold;
              width: 30%;
            "
          >
            Nom :
          </td>
          <td style=" padding: 8px; border-bottom: 1px solid #e2e8f0;">${nom}</td>
        </tr>
        <tr>
          <td
            style="
              padding: 8px;
              border-bottom: 1px solid #e2e8f0;
              font-weight: bold;
            "
          >
            Email :
          </td>
          <td style=" padding: 8px; border-bottom: 1px solid #e2e8f0;">
            ${email}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Téléphone :</td>
          <td style=" padding: 8px;">${phone1} // ${phone2}</td>
        </tr>

        <tr>
          <td style="padding: 8px; font-weight: bold;">Nombre de passagers :</td>
          <td style=" padding: 8px;">${passengers} passagers avec ${adults} adultes , ${childrens} enfants et ${babies} bébés</td>
        </tr>
      </table>

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
    console.log("Message envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    throw new Error("Erreur lors de l'envoi de l'e-mail");
  }
}

export async function POST(req) {
  const { nom, phone1, email, phone2, childrens, adults, babies, message } =
    await req.json();

  if (
    !nom ||
    !phone1 ||
    !email ||
    !phone2 ||
    childrens === undefined ||
    adults === undefined ||
    babies === undefined ||
    !message
  ) {
    return NextResponse.json(
      { error: "Tous les champs sont requis." },
      { status: 400 }
    );
  }

  try {
    const parsedChildrens = parseInt(childrens, 10) || 0;
    const parsedAdults = parseInt(adults, 10) || 0;
    const parsedBabies = parseInt(babies, 10) || 0;

    const totalPassengers = parsedAdults + parsedChildrens + parsedBabies;

    await db.reservation.create({
      data: {
        nom,
        phone1,
        email,
        phone2,
        passengers: totalPassengers,
        childrens: parsedChildrens,
        adults: parsedAdults,
        babies: parsedBabies,
        message,
      },
    });

    await sendMessageContact(
      nom,
      email,
      phone1,
      phone2,
      parsedAdults,
      parsedChildrens,
      parsedBabies,
      totalPassengers,
      message
    );

    return new NextResponse(
      JSON.stringify({
        message: "Réservation enregistrée avec succès.",
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
