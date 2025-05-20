import Image from "next/image";

export default function SuggestionItem({ title, imgSrc }) {
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
