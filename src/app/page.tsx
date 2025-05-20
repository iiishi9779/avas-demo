import Header from "@/components/header";
import BottomNavigation from "@/components/bottom-navigation";
import SearchBar from "@/components/search-bar/search-bar";
import SavedLocationsArea from "@/components/saved-locations/saved-locations-area";
import SuggestionsArea from "@/components/suggestions/suggestions-area";
import PlanningTipsArea from "@/components/planning-tips/planning-tips-area";

export default async function Home() {
  return (
    <main className="flex px-8 gap-6 flex-col md:rounded-3xl border border-stone-200 bg-stone-50 max-w-xl mx-auto min-h-screen pb-20 font-[family-name:var(--font-geist-sans)] relative h-screen w-full overflow-hidden">
      <Header />
      <SearchBar />

      <div className="flex flex-col overflow-y-auto gap-6 -mx-8 px-8 pb-12">
        <SavedLocationsArea />
        <SuggestionsArea />
        <PlanningTipsArea />
      </div>

      <BottomNavigation />
    </main>
  );
}
