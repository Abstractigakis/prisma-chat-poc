import Image from "next/image";
import { Menu } from "@headlessui/react";
import { defaultProfileImage } from "@data/fakes";
import { iconButtonClass } from "./TailwindButtonClasses";
import { useSession } from "next-auth/react";
import OpenLoginModalButton from "./LoginButton";
import Profile from "@components/Profile";
import Modal from "@components/Modal";
import { useState } from "react";

const ProfileIconButton = () => {
  const { data: session } = useSession();
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  if (!session || !session.user) return <OpenLoginModalButton />;

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button
          className={iconButtonClass}
          onClick={() => setProfileModalOpen(true)}
        >
          <span className="sr-only">Open user menu</span>
          <Image
            className="w-8 h-8 rounded-full"
            src={session?.user.image || defaultProfileImage}
            alt="user"
            width={32}
            height={32}
          />
        </Menu.Button>

        <Modal open={profileModalOpen} setOpen={setProfileModalOpen}>
          <Profile user={session.user} />
        </Modal>
      </div>
    </Menu>
  );
};

export default ProfileIconButton;
