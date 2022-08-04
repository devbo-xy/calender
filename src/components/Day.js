import dayjs from "dayjs";
import React from "react";

export default function Day({ day, rowIdx }) {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center spacey-y-1">
        {rowIdx === 0 && (
          <p className="text-sm">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}
