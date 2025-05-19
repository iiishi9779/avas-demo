"use client";

import { useEffect, useState } from "react";
import LocationItem from "./location-item";

import { api } from "@/libs/api";

export default function SuggestionList() {
  const [locationList, setLocationList] = useState<any[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await api.locations.get();
      setLocationList(locations.data);
    };
    fetchLocations();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {locationList.map((location, i) => (
        <LocationItem
          key={i}
          title={location.title}
          subtitle={location.location}
        />
      ))}
    </div>
  );
}
