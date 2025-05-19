import SuggestionItem from "./suggestion-item";

export default function SuggestionList() {
  return (
    <div className="flex gap-4">
      <SuggestionItem title="ride" imgSrc="/globe.svg" />
      <SuggestionItem title="package" imgSrc="/globe.svg" />
      <SuggestionItem title="reserve" imgSrc="/globe.svg" />
      <SuggestionItem title="rent" imgSrc="/globe.svg" />
    </div>
  );
}
