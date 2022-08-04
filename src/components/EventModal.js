import React, { useContext, useState } from "react";
import GlobalContext from "Context/GlobalContext";
import { Assets } from "assets";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [email, setEmail] = useState(selectedEvent ? selectedEvent.email : "");

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">Event</span>
          <div className="flex flex-row space-x-2">
            {selectedEvent && (
              <div
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="text-gray-400 cursor-pointer"
              >
                <div className="w-5 h-5 flex justify-center items-center">
                  <img src={Assets.Delete} alt="Delete" />
                </div>
              </div>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <div className="w-5 h-5 flex justify-center items-center">
                <img src={Assets.Close} alt="Delete" />
              </div>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-row space-x-12 justify-center items-center">
              <span className="material-icons-outlined text-gray-400">
                Schedule
              </span>
              <input
                type="text"
                name="title"
                placeholder="Add title"
                value={title}
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-row space-x-[4.5rem] justify-start items-center">
              <span className="material-icons-outlined text-gray-400">
                Time
              </span>
              <p>{daySelected.format("dddd, MMMM DD")}</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-[1.8rem]">
              <span className="material-icons-outlined text-gray-400">
                Description
              </span>
              <input
                type="text"
                name="description"
                placeholder="Add a description"
                value={description}
                required
                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-row space-x-16 justify-center items-center">
              <span className="material-icons-outlined text-gray-400">
                Email
              </span>
              <input
                type="text"
                name="email"
                placeholder="Add your Email"
                value={email}
                required
                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row space-x-14">
              <span className="material-icons-outlined text-gray-400">
                Labels
              </span>
              <div className="flex flex-row space-x-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <div className="flex justify-center items-center w-4 h-4">
                        <img src={Assets.Check} alt="Check" />
                      </div>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
