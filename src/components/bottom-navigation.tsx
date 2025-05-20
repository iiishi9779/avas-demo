import {
  Squares2X2Icon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { HomeIcon } from "@heroicons/react/24/solid";

export default function BottomNavigation() {
  return (
    <div className="absolute bottom-0 left-0 w-full pt-4 h-28 bg-white border-t-1 border-stone-200">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 flex-col gap-1 items-center text-green-600">
          <HomeIcon className="size-8" />
          <div className="text-sm">Home</div>
        </div>
        <div className="flex flex-1 flex-col gap-1 items-center text-stone-600">
          <Squares2X2Icon className="size-8" />
          <div className="text-sm">Services</div>
        </div>
        <div className="flex flex-1 flex-col gap-1 items-center text-stone-600">
          <ClockIcon className="size-8" />
          <div className="text-sm">Activity</div>
        </div>
        <div className="flex flex-1 flex-col gap-1 items-center text-stone-600">
          <UserIcon className="size-8" />
          <div className="text-sm">Account</div>
        </div>
      </div>
    </div>
  );
}
