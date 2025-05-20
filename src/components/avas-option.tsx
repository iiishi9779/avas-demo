"use client";

import { useState } from "react";
import { ToggleGroup } from "radix-ui";

export default function AvasOption() {
  const [value, setValue] = useState("rides");

  return (
    <ToggleGroup.Root
      className="ToggleGroup"
      type="single"
      loop
      defaultValue="rides"
      aria-label="ride or delivery"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="rides"
        aria-label="Rides Navigation"
      >
        Rides
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="delivery"
        aria-label="Delvery Navigation"
      >
        Delivery
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
