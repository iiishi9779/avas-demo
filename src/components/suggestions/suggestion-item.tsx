import Image from "next/image";

type SuggestionItem = {
  title: string;
  imgSrc: string;
};

export default function SuggestionItem({ title, imgSrc }: SuggestionItem) {
  return (
    <div className="flex flex-col size-24 bg-stone-100 border border-stone-200 rounded-xl justify-center items-center">
      <Image
        aria-hidden
        src={`/${imgSrc}.png`}
        alt="Globe icon"
        width={48}
        height={48}
      />
      <div className="font-medium text-stone-700">{title}</div>
    </div>
  );
}
