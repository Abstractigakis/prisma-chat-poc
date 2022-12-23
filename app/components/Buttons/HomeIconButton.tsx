import Image from "next/image";
import { useRouter } from "next/router";
import { iconButtonClass } from "./TailwindButtonClasses";

const HomeIconButton = () => {
  const router = useRouter();
  return (
    <div className={iconButtonClass} onClick={() => router.push("/")}>
      <Image
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
        width={32}
        height={32}
      />
    </div>
  );
};

export default HomeIconButton;
