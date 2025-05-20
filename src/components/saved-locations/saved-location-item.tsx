import { DynamicIcon, IconProps } from "@/components/dynamic-icon";

type LocationItem = {
  title: string;
  subtitle: string;
  icon: IconProps["iconKey"];
};

export default function LocationItem({ title, subtitle, icon }: LocationItem) {
  return (
    <div className="flex gap-3 items-center">
      <div className="p-2 rounded-full bg-stone-200">
        <DynamicIcon iconKey={icon} className="size-6 text-stone-700" />
        {/* <HomeIcon className="size-6 text-stone-700" /> */}
      </div>
      <div>
        <div className="font-medium capitalize">{title}</div>
        <div className="text-stone-500">{subtitle}</div>
      </div>
    </div>
  );
}
