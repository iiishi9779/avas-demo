import {
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function TimeSelectorSheet() {
  return (
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>When do you need the ride?</SheetTitle>
      </SheetHeader>

      <select className="mx-4 rounded-lg border p-3 text-lg" defaultValue="now">
        <option value="now">Now</option>
        <option value="later">Schedule for later</option>
      </select>

      <SheetFooter>
        <button
          type="submit"
          className="w-full text-lg py-3 bg-stone-200 rounded-lg"
        >
          Confirm
        </button>
      </SheetFooter>
    </SheetContent>
  );
}
