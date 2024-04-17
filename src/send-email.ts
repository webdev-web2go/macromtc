import { SENDER_EMAIL, MACROMTC_EMAIL } from "@/constants/emails";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: SENDER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export async function sendEmail(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  let formattedMessage = "";
  if (message) {
    formattedMessage = message
      .split("\r\n")
      .map((line) => `<p>${line}</p>`)
      .join("");
  }

  try {
    await transporter.sendMail({
      from: {
        name,
        address: SENDER_EMAIL,
      },
      to: MACROMTC_EMAIL,
      subject: "Solicitud de información adicional",
      html: `<p><strong>Nombre: </strong>${name}</p>
             <p><strong>Email: </strong>${email}</p>
             <p><strong>Número telefónico: </strong>${phone}</p>
             <br/>
             ${message && `<p>${formattedMessage}</p>`}
            `,
    });
  } catch (error) {
    throw new Error("Error sending email");
  }
}
