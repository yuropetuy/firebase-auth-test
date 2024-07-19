import * as React from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import auth from "./firebase-init";
import actionCodeSettings from "./auth-email-link-actioncode-settings";

interface sendEmailProps {
  email: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function sendEmailLink(
  email: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setLoading(true);
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally, so you don't need to ask the user for it again
      // if they open the link on the same device.
      localStorage.setItem("emailForSignIn", email);
      console.log("email sent");
      setLoading(false);
      // ...
    })
    .catch((error) => {
      setLoading(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
}

export default sendEmailLink;
