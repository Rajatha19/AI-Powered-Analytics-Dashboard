"use client";

import { useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type DateRangeSelection = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export default function DateRangeFilter({
  onChange,
}: {
  onChange: (range: { startDate: Date; endDate: Date }) => void;
}) {
  const [range, setRange] = useState<DateRangeSelection[]>([
    {
      startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function handleRangeChange(ranges: RangeKeyDict) {
    const selection = ranges.selection;

    // Make sure startDate and endDate are defined before use
    if (selection.startDate && selection.endDate) {
      // Update local state
      setRange([selection as DateRangeSelection]);
      // Call parent's callback with guaranteed non-undefined dates
      onChange({ startDate: selection.startDate, endDate: selection.endDate });
    }
  }

  return (
    <div className="mb-4">
      <DateRange
        editableDateInputs={true}
        onChange={handleRangeChange}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={1}
        direction="horizontal"
      />
    </div>
  );
}
