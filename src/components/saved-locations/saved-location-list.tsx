"use client";
import SavedLocationItem from "./saved-location-item";

import type { LocationList } from "@/lib/api";

export default function LocationList({
  locations,
}: {
  locations: LocationList | null;
}) {
  return (
    <div className="flex flex-col gap-3">
      {locations?.map((l, i) => (
        <SavedLocationItem key={i} title={l.title} subtitle={l.location} />
      ))}
    </div>
  );
}
