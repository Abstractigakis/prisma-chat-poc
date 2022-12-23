import HomeIconButton from "@components/Buttons/HomeIconButton";
import MobileMenuIconButton from "@components/Buttons/MobileMenuIconButton";

type LeftNavbarProps = {
  open: boolean;
};

const LeftNavbar = ({ open }: LeftNavbarProps) => {
  return (
    <div className="flex">
      <div className="flex items-center mr-2 -ml-2 md:hidden">
        <MobileMenuIconButton open={open} />
      </div>
      <div className="flex items-center flex-shrink-0">
        <HomeIconButton />
      </div>
      <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
        Here
      </div>
    </div>
  );
};

export default LeftNavbar;
