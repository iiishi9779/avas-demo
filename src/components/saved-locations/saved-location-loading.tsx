export default function SavedLocationListLoading() {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 2 }, (_, i) => (
        <div key={i} className="flex gap-3 items-center">
          <div className="p-6 rounded-full bg-stone-200"></div>
          <div className="flex flex-col gap-3">
            <div className="rounded bg-stone-200 w-32 h-4"></div>
            <div className="rounded bg-stone-200 w-64 h-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
