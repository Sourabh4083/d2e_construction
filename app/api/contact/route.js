import { connectToDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json()
        //Connect to mongoDB
        await connectToDB()

        //Save to database
        const newContact = new Contact({ name, email, subject, message })
        await newContact.save()

        //Send email notification to company
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOptions = {
            from: `"D2E Construction Website" <${process.env.EMAIL_USER}>`,
            to: "d2econstruction@email.com", // your company email
            subject: `📩 New Inquiry from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "(No Subject)"}</p>
        <p><strong>Message:</strong><br/>${message || "(No Message Provided)"}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">This message was sent automatically from your website contact form.</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Message sent successfully!" });

    } catch (error) {
        console.error("❌ Error submitting contact form:", error);
        return NextResponse.json({ success: false, message: "Failed to submit form." });

    }
}