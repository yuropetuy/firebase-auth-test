import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { navigate } from "gatsby";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../utils/firebase-init";

const SuccessPage: React.FC<PageProps> = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log("User status: " + user);
  console.log("Loading status:" + loading);
  console.log("Errors: " + error);

  if (!user) {
    navigate("/");
  }

  return <div>{loading ? <div>Loading...</div> : <div>Logged In</div>}</div>;
};

export default SuccessPage;

export const Head: HeadFC = () => <title>Home</title>;
