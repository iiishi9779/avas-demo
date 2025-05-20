"use client";
import SavedLocationItem from "./saved-location-item";

export default function LocationList({ locations }: any[]) {
  return (
    <div className="flex flex-col gap-3">
      {locations.map((l, i) => (
        <SavedLocationItem key={i} title={l.title} subtitle={l.location} />
      ))}
    </div>
  );
}
