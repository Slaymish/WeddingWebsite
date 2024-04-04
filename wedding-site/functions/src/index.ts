import * as functions from "firebase-functions";
import { firestore } from "firebase-functions";
import * as sgMail from "@sendgrid/mail";
import { config } from 'dotenv';

config();

type QueryDocumentSnapshot = firestore.QueryDocumentSnapshot;

if(!process.env.SENDGRID_API_KEY) {
  throw new Error("No SendGrid API key found. Please set the SENDGRID_API_KEY environment variable.");
}

// Configure SendGrid with your API key.
const sendgridApiKey = process.env.SENDGRID_API_KEY as string;
sgMail.setApiKey(sendgridApiKey);

exports.sendEmailConfirmation = functions.firestore
  .document("rsvps/{rsvpId}")
  .onCreate((snap: QueryDocumentSnapshot) => {
    const newValue = snap.data();

    const msg = {
      to: newValue.email,
      from: "me@hamishburke.dev", // Use the email address or domain you verified with SendGrid
      subject: "Thank you for your RSVP!",
      text: `Dear ${newValue.name},\n\nThank you for your RSVP. We look forward to seeing you at the wedding!`,
    };

    // If they're not attending, don't send the email.
    if (!newValue.attending) {
      msg.subject = "Sorry you can't make it!";
      msg.text = `Dear ${newValue.name},\n\nWe're sorry to hear you can't make it. We'll miss you!`;
    }

    let coupleEmail = "Dear Lani and Finlay,\n\n";

    coupleEmail += `${newValue.name} has RSVP'd to your wedding. They are ${newValue.attending ? "attending" : "not attending"}.`;

    if(newValue.message && newValue.message.length > 0) {
      coupleEmail += `\n\nThey left a message: "${newValue.message}"`;
    }

    coupleEmail += `\n\nView all attending at https://laniandfinlay.com/attending.`;

    coupleEmail += `\n\nLove,\nHamish\n\nPS: This email was sent by a robot.`;

    // Send another email to the couple.
    const msgToCouple = {
      to: "lanisimba@icloud.com",
      from: "me@hamishburke.dev",
      subject: "RSVP received",
      text: coupleEmail,
    };

    // Send the email.
    sgMail.send(msgToCouple).then(() => {
      console.log("Email sent");
    }).catch((error) => {
      console.error(error);
    });

    return sgMail.send(msg).then(() => {
      console.log("Email sent");
    }).catch((error) => {
      console.error(error);
    });
  });