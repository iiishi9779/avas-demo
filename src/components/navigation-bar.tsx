import {
  HomeIcon,
  Squares2X2Icon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function NavigationBar() {
  return (
    <div className="row-start-3 flex gap-12 flex-wrap items-center justify-center">
      <div className="flex flex-col gap-1 items-center">
        <HomeIcon className="size-8 text-gray-700" />
        <div className="text-sm">Home</div>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <Squares2X2Icon className="size-8 text-gray-700" />
        <div className="text-sm">Services</div>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <ClockIcon className="size-8 text-gray-700" />
        <div className="text-sm">Activity</div>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <UserIcon className="size-8 text-gray-700" />
        <div className="text-sm">Account</div>
      </div>
    </div>
  );
}
