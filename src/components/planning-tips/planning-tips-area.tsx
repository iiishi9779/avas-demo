import Image from "next/image";

export default function PlanningTipsArea() {
  return (
    <div>
      <h2 className="text-heading mb-5">Ways to plan with Avas</h2>

      <div className="grid grid-flow-col gap-4">
        <div className="relative h-64">
          <Image className="bg-cover" src="/img/shopping.jpg" alt="shopping" />
        </div>
        <div className="relative h-64">
          <Image className="bg-cover" src="/img/shopping.jpg" alt="shopping" />
        </div>
        <div className="relative h-64">
          <Image className="bg-cover" src="/img/shopping.jpg" alt="shopping" />
        </div>
        <div className="relative h-64">
          <Image className="bg-cover" src="/img/shopping.jpg" alt="shopping" />
        </div>
        <div className="relative h-64">
          <Image className="bg-cover" src="/img/shopping.jpg" alt="shopping" />
        </div>
      </div>
    </div>
  );
}
