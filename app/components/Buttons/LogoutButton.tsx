import { signOut } from "next-auth/react";
import { buttonClass } from "./TailwindButtonClasses";

const LogoutButton = () => {
  return (
    <button
      className={buttonClass}
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
