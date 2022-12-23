import EmailInput from "@components/Inputs/EmailInput";
import PasswordInput from "@components/Inputs/PasswordInput";
import { useState } from "react";

const EmailPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("/api/auth/login");
    const data = await res.json();
    console.log({ data });
  };

  return (
    <form action="#" method="POST" className="space-y-6">
      <div>
        <EmailInput email={email} setEmail={setEmail} />
      </div>
      <div className="py-1">
        <PasswordInput password={password} setPassword={setPassword} />
      </div>
      <button
        type="submit"
        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onSubmit={() => login()}
      >
        Sign in
      </button>
    </form>
  );
};

export default EmailPassword;
