import { BellIcon } from "@heroicons/react/24/outline";
import { iconButtonClass } from "@components/Buttons/TailwindButtonClasses";

const NotificationIconButton = () => {
  return (
    <button type="button" className={iconButtonClass}>
      <BellIcon className="w-6 h-6" aria-hidden="true" />
    </button>
  );
};

export default NotificationIconButton;
