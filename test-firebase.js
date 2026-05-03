/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config();
const admin = require('firebase-admin');

try {
  let pk = process.env.FIREBASE_PRIVATE_KEY;
  if (!pk) throw new Error("No private key found in env");
  
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: pk.replace(/\\n/g, '\n').replace(/"/g, ''),
    }),
  });
  console.log("Firebase initialized successfully");
} catch (e) {
  console.error("Init error:", e.message);
}
