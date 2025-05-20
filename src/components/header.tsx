import Image from "next/image";
import AvasOption from "@/components/avas-option";

export default function Header() {
  return (
    <header className="mt-6 flex justify-between items-center">
      <div className="flex gap-1 items-center">
        <Image
          src="/logo.png"
          alt="avas demo app logo"
          width={60}
          height={60}
          priority
        />
        <div className="text-3xl font-bold">Avas App</div>
      </div>
      <AvasOption />
    </header>
  );
}
