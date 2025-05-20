export default function SuggestionsListLoading() {
  return (
    <div className="flex gap-4">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="size-24 bg-stone-200 rounded-xl"></div>
      ))}
    </div>
  );
}
