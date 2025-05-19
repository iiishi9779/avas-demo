"use client";

import { useEffect } from "react";
import LocationItem from "./location-item";

import { api } from "@/libs/api";

export default function SuggestionList() {
  useEffect(() => {
    api.locations.get();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <LocationItem title="Work" subtitle="1455 Market St" />
      <LocationItem title="Home" subtitle="903 Sunrose Terr" />
    </div>
  );
}
