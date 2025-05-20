import Image from "next/image";
import BottomNavigation from "@/components/bottom-navigation";
import SearchBar from "@/components/search-bar";
import SavedLocationsArea from "@/components/saved-locations/saved-locations-area";
import SuggestionsArea from "@/components/suggestions/suggestions-area";
import PlanningTipsArea from "@/components/planning-tips/planning-tips-area";

export default async function Home() {
  return (
    <div className="">
      <main className="flex px-8 gap-6 flex-col md:rounded-3xl border border-stone-200 bg-stone-50 max-w-xl mx-auto min-h-screen pb-20 font-[family-name:var(--font-geist-sans)] relative h-screen w-full overflow-hidden">
        <header className="flex gap-4 mt-6">
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="avas demo app logo"
            width={40}
            height={40}
            priority
          />
          <div className="text-3xl font-bold">Avas App</div>
        </header>
        <SearchBar />
        <div className="flex flex-col overflow-y-auto gap-6 -mx-8 px-8 pb-12">
          <SavedLocationsArea />
          <SuggestionsArea />
          {/* <PlanningTipsArea /> */}

          {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div> */}
        </div>

        <BottomNavigation />
      </main>
    </div>
  );
}
