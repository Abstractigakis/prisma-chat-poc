import { UserCircleIcon } from "@heroicons/react/20/solid";
import { loginButtonClass } from "./TailwindButtonClasses";
import { useState } from "react";
import Modal from "@components/Modal";
import Login from "@components/Login";

const LoginButton = () => {
  const [loginModalButton, setLoginModalButton] = useState(false);
  return (
    <>
      <button
        type="button"
        className={loginButtonClass}
        onClick={() => setLoginModalButton(true) }
      >
        <UserCircleIcon className="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
        Login
      </button>
      <Modal open={loginModalButton} setOpen={setLoginModalButton}>
        <Login />
      </Modal>
    </>
  );
};

export default LoginButton;
