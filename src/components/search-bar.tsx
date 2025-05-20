"use client";

import {
  MagnifyingGlassIcon,
  ClockIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useRef } from "react";

export default function SearchBar() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={handleFocus}
      className="flex gap-4 bg-white rounded-full p-4 items-center shadow-sm shadow-stone-300/50 focus-within:outline-2 outline-green-600"
    >
      <MagnifyingGlassIcon className="size-8 text-stone-500" />
      <input
        ref={inputRef}
        className="flex-1 placeholder-stone-500 text-lg font-medium outline-none"
        type="text"
        placeholder="Where to?"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="px-2 py-1 flex items-center gap-1 bg-stone-50 rounded-full border border-stone-200 shadow-xs shadow-stone-300">
        <ClockIcon className="size-5 text-stone-600" />
        <span className="font-medium text-stone-600 pr-1">Now</span>
      </div>
      <ChevronRightIcon className="size-5 text-stone-800" />
    </div>
  );
}
