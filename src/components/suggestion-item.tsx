import Image from "next/image";

export default function SuggestionItem({ title, imgSrc }) {
  return (
    <div className="flex flex-col size-20 bg-gray-200 rounded-xl justify-center items-center">
      <Image aria-hidden src={imgSrc} alt="Globe icon" width={28} height={28} />
      <div>{title}</div>
    </div>
  );
}
