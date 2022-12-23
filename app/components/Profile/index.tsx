import { User } from "next-auth";
import LogoutButton from "@components/Buttons/LogoutButton";

export interface ProfileProps {
  user: User;
}

const Profile = ({ user }: ProfileProps) => {
  console.log({ user });
  return (
    <div>
      <div>{JSON.stringify(user)}</div>
      <LogoutButton />
    </div>
  );
};

export default Profile;
