"use client";

import { useEffect, useState } from "react";
import { api } from "@/libs/api";
import SuggestionItem from "./suggestion-item";

export default function SuggestionList() {
  const [suggestionList, setSuggestionList] = useState<any[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const suggestions = await api.suggestions.get();
      setSuggestionList(suggestions.data);
    };
    fetchSuggestions();
  }, []);
  return (
    <div className="flex gap-4">
      {suggestionList.map((suggestion, i) => (
        <SuggestionItem
          key={i}
          title={suggestion.title}
          imgSrc={suggestion.imgSrc}
        />
      ))}
    </div>
  );
}
