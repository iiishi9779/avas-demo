"use client";
import SuggestionItem from "./suggestion-item";

import type { SuggestionList } from "@/lib/api";

export default function SuggestionList({
  suggestions,
}: {
  suggestions: SuggestionList | null;
}) {
  return (
    <div className="flex gap-4">
      {suggestions?.map((s, i) => (
        <SuggestionItem key={i} title={s.title} imgSrc={s.imgSrc} />
      ))}
    </div>
  );
}
