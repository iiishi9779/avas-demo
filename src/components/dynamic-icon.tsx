import { HomeIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";

const iconMap = {
  home: HomeIcon,
  office: BuildingOfficeIcon,
} as const;

export type IconProps = {
  iconKey: keyof typeof iconMap;
  className?: string;
};

export function DynamicIcon({ iconKey, className }: IconProps) {
  const IconComponent = iconMap[iconKey];

  if (!IconComponent) {
    console.warn(`Icon "${iconKey}" not found!`);
    return null;
  }

  return <IconComponent className={className} />;
}
