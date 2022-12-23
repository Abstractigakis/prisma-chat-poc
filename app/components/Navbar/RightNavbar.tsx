import { useSession } from "next-auth/react";
import RightProfileNavbar from "./RightProfileNavbar";
import LoginButton from "@components/Buttons/LoginButton";

const RightNavbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center">
      {session && session.user ? (
        <RightProfileNavbar user={session.user} />
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default RightNavbar;
