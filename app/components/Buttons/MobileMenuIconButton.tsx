import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { iconButtonClass } from "./TailwindButtonClasses";

type MobileMenuIconButtonProps = {
  open: boolean;
};

const MobileMenuIconButton = ({ open }: MobileMenuIconButtonProps) => {
  return (
    <Disclosure.Button className={iconButtonClass}>
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

export default MobileMenuIconButton;
