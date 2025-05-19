import { HomeIcon } from "@heroicons/react/24/solid";

export default function LocationItem({ title, subtitle }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="p-2 rounded-full bg-stone-200">
        <HomeIcon className="size-6 text-stone-700" />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-stone-500">{subtitle}</div>
      </div>
    </div>
  );
}
