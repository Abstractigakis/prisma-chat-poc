import NotificationIconButton from "@components/Buttons/NotificationIconButton";
import ProfileIconButton from "@components/Buttons/ProfileIconButton";

export interface RightProfileNavbarProps {
  user: object;
}

const RightProfileNavbar = ({ user }: RightProfileNavbarProps) => {
  return (
    <div className="ml-4 flex flex-shrink-0 items-center">
      <NotificationIconButton />
      <ProfileIconButton />
    </div>
  );
};

export default RightProfileNavbar;
