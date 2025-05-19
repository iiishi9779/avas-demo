import Image from "next/image";
import LocationList from "@/components/locations/location-list";
import SuggestionList from "@/components/suggestions/suggestion-list";
import NavigationBar from "@/components/navigation-bar";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div className="bg-stone-50 grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex px-8 flex-col gap-[32px] row-start-2">
        <header className="flex gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={80}
            priority
          />
          <div className="text-3xl font-bold">Avas App</div>
        </header>

        <SearchBar />

        <LocationList />

        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-stone-700">Suggestions</h2>
          <div className="text-stone-700">See all</div>
        </div>

        <SuggestionList />

        <h2 className="text-xl font-semibold text-stone-700">
          Ways to plan with Avas
        </h2>
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
      </main>
      <NavigationBar />
    </div>
  );
}
