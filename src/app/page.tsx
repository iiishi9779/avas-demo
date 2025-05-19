import Image from "next/image";
import SuggestionItem from "@/components/suggestion-item";
import LocationItem from "@/components/location-item";
import NavigationBar from "@/components/navigation-bar";
import {
  MagnifyingGlassIcon,
  ClockIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="bg-gray-50 grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
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

        <div className="flex gap-4 bg-gray-100 rounded-full p-4 items-center">
          <MagnifyingGlassIcon className="size-8 text-gray-500" />
          <input
            className="flex-1 placeholder-gray-500 text-xl font-medium"
            type="text"
            placeholder="Where to?"
          />
          <div className="px-2 py-1 flex items-center gap-1 bg-white rounded-full">
            <ClockIcon className="size-5 text-gray-800" />
            <span className="font-medium">Now</span>
          </div>
          <ChevronRightIcon className="size-5 text-gray-800" />
        </div>

        <div className="flex flex-col gap-3">
          <LocationItem title="Work" subtitle="1455 Market St" />
          <LocationItem title="Home" subtitle="903 Sunrose Terr" />
        </div>

        <div className="flex justify-between">
          <h2 className="text-xl font-medium text-gray-700">Suggestions</h2>
          <div className="text-gray-700">See all</div>
        </div>
        <div className="flex gap-4">
          <SuggestionItem title="ride" imgSrc="/globe.svg" />
          <SuggestionItem title="package" imgSrc="/globe.svg" />
          <SuggestionItem title="reserve" imgSrc="/globe.svg" />
          <SuggestionItem title="rent" imgSrc="/globe.svg" />
        </div>

        <h2 className="text-xl font-medium text-gray-700">
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
