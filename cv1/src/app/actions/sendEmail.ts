"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
    name: string,
    email: string,
    subject: string,
    message: string
) {
    try {
        const data = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: ["zepf2001@gmail.com"],
            subject: subject,
            reply_to: email,
            text: message,
        });

        if (data.error === null) {
            return { sent: true };
        }
    } catch (error) {
        return { sent: false };
    }
}
