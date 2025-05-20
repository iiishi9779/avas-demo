import { Suspense } from "react";
import SavedLocationList from "@/components/saved-locations/saved-location-list";
import Loading from "@/components/saved-locations/saved-location-loading";
import { api } from "@/lib/api";

async function SavedLocationListWithData() {
  const { data } = await api.locations.get();
  return <SavedLocationList locations={data} />;
}

export default function SuggestionsArea() {
  return (
    <Suspense fallback={<Loading />}>
      <SavedLocationListWithData />
    </Suspense>
  );
}
