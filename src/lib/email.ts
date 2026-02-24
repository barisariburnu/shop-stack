import { render } from "@react-email/components";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // Use TLS (port 587 uses STARTTLS)
  auth: {
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface SendEmailProps {
  to: string | string[];
  subject: string;
  body: React.ReactElement;
  from?: string;
}
export async function sendEmail({
  to,
  subject,
  body,
  from = "Shop Stack <noreply@shopstack.com>",
}: SendEmailProps) {
  try {
    // Convert React email component to HTML
    const emailHtml = await render(body);

    const info = await transporter.sendMail({
      from,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      html: emailHtml,
    });

    return { messageId: info.messageId };
  } catch (err) {
    console.error("Email sending error:", err);
    throw err;
  }
}
