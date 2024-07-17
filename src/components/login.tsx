import * as React from "react";
import { FormEvent, useState } from "react";
import sendEmailLink from "../utils/auth-email-link-send";

interface LoginComponentsProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginComponent: React.FC<LoginComponentsProps> = ({ setLoading }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendEmailLink(email, setLoading);
    setLoading(true);
    console.log("Form submitted");
  };
  return (
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
  );
};

export default LoginComponent;
