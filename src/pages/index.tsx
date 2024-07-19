import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import LoginComponent from "../components/login";

const IndexPage: React.FC<PageProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <LoginComponent setLoading={setLoading} />
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Login</title>;
