"use client";
import SuggestionItem from "./suggestion-item";

export default function SuggestionList({ suggestions }: any[]) {
  return (
    <div className="flex gap-4">
      {suggestions.map((s, i) => (
        <SuggestionItem key={i} title={s.title} imgSrc={s.imgSrc} />
      ))}
    </div>
  );
}
