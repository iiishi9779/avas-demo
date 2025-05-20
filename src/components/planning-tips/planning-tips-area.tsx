import Image from "next/image";

export default function PlanningTipsArea() {
  return (
    <div>
      <h2 className="text-heading mb-5">Ways to plan with Avas</h2>

      <div className="flex relative overflow-x-scroll space-x-6 snap-x snap-proximity">
        <div className=" h-68 flex-shrink-0">
          <Image
            className="snap-center rounded-xl"
            src="/img/pic_1.jpg"
            alt="mountain"
            height={192}
            width={0}
            style={{ height: "100%", width: "auto" }}
            unoptimized
          />
        </div>
        <div className=" h-68 flex-shrink-0">
          <Image
            className="snap-center rounded-xl"
            src="/img/pic_2.jpg"
            alt="mountain"
            height={192}
            width={0}
            style={{ height: "100%", width: "auto" }}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
