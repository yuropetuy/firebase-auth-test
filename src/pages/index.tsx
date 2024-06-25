import * as React from "react";
import { FormEvent, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import sendEmailLink from "../utils/auth-email-link-send";

const IndexPage: React.FC<PageProps> = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendEmailLink(email);
    console.log("Form submitted");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>Enter email here</div>

        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
