import { Disclosure } from "@headlessui/react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <LeftNavbar open={open} />
              <RightNavbar />
            </div>
          </div>

          <MobileNavbar />
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
