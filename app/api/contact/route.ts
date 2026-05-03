import { NextResponse } from "next/server";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";
import { getContactEmailTemplate, getConfirmationEmailTemplate } from "./email-template";

// Singleton pattern for the transporter to reuse the connection in production
let transporter: nodemailer.Transporter | null = null;

const getTransporter = () => {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Production settings for reliability
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
  });

  return transporter;
};

// Initialize Firebase Admin securely
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Strict Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // 2. Store in Firestore (Primary Record)
    const db = admin.firestore();
    await db.collection("messages").add({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 3. Send Email Notification (Secondary Notification)
    try {
      const mailTransporter = getTransporter();
      await mailTransporter.sendMail({
        from: `"Portfolio Inquiry" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `New Inquiry from ${name}`,
        html: getContactEmailTemplate(name, email, message),
        replyTo: email,
      });

      // 4. Send Confirmation Email to the Sender
      await mailTransporter.sendMail({
        from: `"Harsh Vaddoriya" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Message Received - Harsh Vaddoriya",
        html: getConfirmationEmailTemplate(name),
      });
    } catch (emailError) {
      // We log the error but don't fail the user request because the message is already in Firestore
      console.error("Critical: Failed to send email notification:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
