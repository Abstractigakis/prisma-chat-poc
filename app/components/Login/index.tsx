import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";
import EmailPassword from "@components/Forms/EmailPassword";

const Login = () => {
  return (
    <>
      <div className="mx-1 mb-3">
        <EmailPassword />
      </div>
      <div className="grid place-items-center">
        <GoogleButton onClick={() => signIn("google")} />
      </div>
    </>
  );
};

export default Login;
