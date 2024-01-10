import * as functions from "firebase-functions";
import { firestore } from "firebase-functions";
import * as sgMail from "@sendgrid/mail";
type QueryDocumentSnapshot = firestore.QueryDocumentSnapshot;

// Configure SendGrid with your API key.
sgMail.setApiKey("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");

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

    // Send another email to the couple.
    const msgToCouple = {
      to: "hamishapps@gmail.com",
      from: "me@hamishburke.dev",
      subject: `New RSVP (${newValue.name})`,
      text: `Dear Lani and Finlay,\n\n ${newValue.name} has RSVP'd to your wedding. They are ${newValue.attending ? "attending" : "not attending"} and have ${newValue.dietaryRequirements ? "dietary requirements" : "no dietary requirements"}.View all attending at https://laniandfinlay.com/attending.\n\nLove,\nHamish\n\nPS: This email was sent by a robot.`,
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