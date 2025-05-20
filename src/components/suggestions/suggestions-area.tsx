import { Suspense } from "react";
import SuggestionList from "@/components/suggestions/suggestion-list";
import Loading from "@/components/suggestions/suggestions-loading";
import { api } from "@/libs/api";

async function SuggestionListWithData() {
  const { data } = await api.suggestions.get();
  return <SuggestionList suggestions={data} />;
}

export default function SuggestionsArea() {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h2 className="text-heading">Suggestions</h2>
        <div className="text-stone-700">See all</div>
      </div>
      <Suspense fallback={<Loading />}>
        <SuggestionListWithData />
      </Suspense>
    </div>
  );
}
