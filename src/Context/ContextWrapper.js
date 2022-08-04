import React, { useContext, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  //   const [showModal, setShowModal] = useContext(false);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        // showModal,
        // setShowModal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
