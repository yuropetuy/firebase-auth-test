import * as React from "react";
import { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { navigate } from "gatsby";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../utils/firebase-init";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const SuccessPage: React.FC<PageProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  const [initLoading, setInitLoading] = useState(false);

  console.log("User status: " + user);
  console.log("Loading status:" + loading);
  console.log("Errors: " + error);

  useEffect(() => {
    if (!user) {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = localStorage.getItem("emailForSignIn");
        if (!email) {
          navigate("/");
        }
        signInWithEmailLink(auth, email, window.location.href)
          .then(() => {
            localStorage.removeItem("emailForSignIn");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        navigate("/");
      }
    }
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {user ? <div>Logged In User</div> : <div>User Not Logged In</div>}
        </div>
      )}
    </div>
  );
};

export default SuccessPage;

export const Head: HeadFC = () => <title>Home</title>;
