import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";
import CalenderHeader from "./components/CalenderHeader";
import Month from "components/Month";
import GlobalContext from "Context/GlobalContext";
// import EventModal from "components/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      {/* {showEventModal && <EventModal />} */}
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
