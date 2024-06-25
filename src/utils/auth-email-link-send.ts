import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import app from "./firebase-init";
import actionCodeSettings from "./auth-email-link-actioncode-settings";

function sendEmailLink(email: string) {
  const auth = getAuth(app);

  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally, so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      console.log("email sent");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
}

export default sendEmailLink;
