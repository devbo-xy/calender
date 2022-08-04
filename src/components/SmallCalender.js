import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getMonth } from "util";

export default function SmallCalender() {
  const [monthIdx, setMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(setMonthIdx));
  }, [monthIdx]);

  return <div></div>;
}
