import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "Context/GlobalContext";
import { Assets } from "assets";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex flex-row space-x-6 items-center">
      <h1 className="text-xl text-gray-500 fond-bold">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-6">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <div className="w-5 h-5 flex justify-center items-center">
          <img src={Assets.Left} alt="Delete" />
        </div>
      </button>
      <button onClick={handleNextMonth}>
        <div className="w-5 h-5 flex justify-center items-center">
          <img src={Assets.Right} alt="Delete" />
        </div>
      </button>
      <h2 className="text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
