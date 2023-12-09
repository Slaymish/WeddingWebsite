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

    // If they're not attending, don't send the email.
    if (!newValue.attending) {
      return null;
    }

    const msg = {
      to: newValue.email,
      from: "me@hamishburke.dev", // Use the email address or domain you verified with SendGrid
      subject: "Thank you for your RSVP!",
      text: `Dear ${newValue.name},\n\nThank you for your RSVP. We look forward to seeing you at the wedding!`,
    };

    return sgMail.send(msg).then(() => {
      console.log("Email sent");
    }).catch((error) => {
      console.error(error);
    });
  });