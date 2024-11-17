"use client"
import "./Calender.css";
import React, { useState, useEffect } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState([]); // Store status as an array
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const calendarRef = React.createRef();

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMonthYearChange = () => {
    const calendarApi = calendarRef.current.getApi();
    const newDate = new Date(selectedYear, selectedMonth, 1);
    calendarApi.gotoDate(newDate);
  };

  const AddNewEvent = (e) => {
    e.preventDefault();
  
    // Use default title if none is provided
    const eventTitle = newEventTitle.trim() === "" ? "Untitled Event" : newEventTitle;
  
    if (selectedDate) {
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();
  
      const newEvent = {
        id: `${selectedDate.start.toISOString()}-${eventTitle}`,
        title: eventTitle,
        start: selectedDate.start,
        end: selectedDate.end,
        allDay: selectedDate.allDay,
        status: status.join(", "), // Join the status array into a single string
      };
  
      // Add the new event to the calendar
      calendarApi.addEvent(newEvent);
      setCurrentEvents([...currentEvents, newEvent]);
  
      // Reset form and close dialog
      handleCloseDialog();
    }
  };
  

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setNewEventTitle("");
    setStatus([]); // Reset status after closing the dialog
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEvents = localStorage.getItem("events");
      if (savedEvents) {
        setCurrentEvents(JSON.parse(savedEvents));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("events", JSON.stringify(currentEvents));
    }
  }, [currentEvents]);

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setIsDialogOpen(true);
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event "${selected.event.title}"?`)) {
      selected.event.remove();
    }
  };

  // const addCustomStyles = () => {
  //   if (calendarRef.current && calendarRef.current.el) {
  //     const calendarContainer = calendarRef.current.el;
  //     const prevButton = calendarContainer.querySelector(".fc-prev-button");
  //     const nextButton = calendarContainer.querySelector(".fc-next-button");

  //     [prevButton, nextButton].forEach((button) => {
  //       if (button) {
  //         button.classList.add("text-white", "bg-transparent", "border-none");
  //         const svg = button.querySelector("svg");
  //         if (svg) {
  //           svg.classList.add("text-white", "w-5", "h-5");
  //         }
  //       }
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     addCustomStyles();
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
<div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl">
      <div className="flex flex-col lg:flex-row w-full px-4 lg:px-10 justify-start items-start gap-8">
        {/* Event List Section */}
        <div className="w-full lg:w-3/12 py-2 px-4 bg-white rounded-lg shadow-lg">
          <div className="py-5 text-2xl font-extrabold text-center text-[#262626]">
            Compliances 
          </div>
          <ul className="space-y-4 mb-2">
            {currentEvents.length === 0 ? (
              <div className="italic text-center text-gray-400">No Events Present</div>
            ) : (
              currentEvents.map((event) => (
                <li key={event.id} className="border border-gray-200 shadow px-4 py-2 rounded-md text-blue-800">
                  {event.title}
                  <br />
                  <label className="text-slate-950">
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    <br />
                    <span>Status: {event.status}</span>
                  </label>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Calendar Section */}
        <div className="w-full  lg:w-9/12 mt-8 ">
          <div className="flex flex-col items-center justify-center gap-4 mb-4 py-1 shadow-md border-b border-gray-300 ">
            {/* Month and Year Selectors */}
            <div className="flex flex-wrap justify-center gap-4">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="border border-gray-700 p-2 rounded-md"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {new Date(0, i).toLocaleString("default", { month: "long" })}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="border border-gray-300 p-2 rounded-md"
              >
                {Array.from({ length: 21 }, (_, i) => (
                  <option key={i} value={2020 + i}>
                    {2020 + i}
                  </option>
                ))}
              </select>

              <button
                onClick={handleMonthYearChange}
                className="bg-[#336699] text-white px-4 py-2 rounded-md hover:bg-blue-700 "
              >
                Go
              </button>
            </div>
          </div>

<div className="shadow-lg">
          <FullCalendar
            ref={calendarRef}
            height={"85vh"}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: isMobile ? "prev" : "prev,next today",
              center: "title",
              right: isMobile ? "next" : "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={typeof window !== "undefined" ? JSON.parse(localStorage.getItem("events") || "[]") : []}
            datesSet={addCustomStyles}
          />
          </div>
        </div>
      </div>

      {/* Dialog for Adding Event */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event Details</DialogTitle>
          </DialogHeader>

          {/* Event Title Input */}
          <input
            type="text"
            placeholder="Event Title"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            required
            className="border border-gray-200 p-3 text-black rounded-md text-lg w-full mb-4"
          />

          {/* Status Options */}
          <div className="space-y-4">
            <label className="font-medium">Status</label>
            <div className="flex flex-col gap-2">
              {[
                "Compiled",
                "Pending",
                "PendingRejected",
                "Future",
                "ChecklistCompiled",
                "ChecklistPending",
              ].map((statusOption) => (
                <label key={statusOption}>
                  <input
                    type="checkbox"
                    value={statusOption}
                    checked={status.includes(statusOption)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setStatus((prevStatus) => [...prevStatus, statusOption]);
                      } else {
                        setStatus((prevStatus) => prevStatus.filter((s) => s !== statusOption));
                      }
                    }}
                  />
                  {statusOption}
                </label>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <button onClick={AddNewEvent} className="bg-blue-600 text-white p-3 rounded-md mt-4 w-full">
            Save Event
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Calendar;


//   "use client";
//   import "./Calender.css";
//   import React, { useState, useEffect } from "react";
//   import { formatDate } from "@fullcalendar/core";
//   import FullCalendar from "@fullcalendar/react";
//   import dayGridPlugin from "@fullcalendar/daygrid";
//   import timeGridPlugin from "@fullcalendar/timegrid";
//   import interactionPlugin from "@fullcalendar/interaction";
//   import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//   } from "../ui/dialog";

//   const statuses = [
//     "Compiled",
//     "Pending",
//     "PendingRejected",
//     "Future",
//     "Checklist Compiled",
//     "Checklist Pending",
//   ];

//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   const Calendar = () => {
//     const [currentEvents, setCurrentEvents] = useState([]);
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const [newEventTitle, setNewEventTitle] = useState("");
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [status, setStatus] = useState(""); // State for the selected status
//     const [isMobile, setIsMobile] = useState(false);
//     const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
//     const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//     const calendarRef = React.createRef();


//       // Check screen size on mount and resize
//       useEffect(() => {
//         const handleResize = () => {
//           setIsMobile(window.innerWidth <= 640); // Define mobile screen size
//         };
    
//         // Check on initial render
//         handleResize();
    
//         // Set up resize listener
//         window.addEventListener('resize', handleResize);
    
//         // Clean up the listener
//         return () => window.removeEventListener('resize', handleResize);
//       }, []);
    
//     const AddNewEvent = (e) => {
//       e.preventDefault();
//       if (newEventTitle && selectedDate) {
//         const calendarApi = selectedDate.view.calendar;
//         calendarApi.unselect();
    
//         const newEvent = {
//           id: `${selectedDate.start.toISOString()}-${newEventTitle}`,
//           title: newEventTitle,
//           start: selectedDate.start,
//           end: selectedDate.end,
//           allDay: selectedDate.allDay,
//           status: status, // Add status to the event
//         };
    
//         calendarApi.addEvent(newEvent);
//         handleCloseDialog();
//       }
//     };
//     const handleMonthYearChange = () => {
//       const calendarApi = calendarRef.current.getApi();
//       const newDate = new Date(selectedYear, selectedMonth, 1);
//       calendarApi.gotoDate(newDate);
//     };


//     useEffect(() => {
//       if (typeof window !== "undefined") {
//         const savedEvents = localStorage.getItem("events");
//         if (savedEvents) {
//           setCurrentEvents(JSON.parse(savedEvents));
//         }
//       }
//     }, []);

//     useEffect(() => {
//       if (typeof window !== "undefined") {
//         localStorage.setItem("events", JSON.stringify(currentEvents));
//       }
//     }, [currentEvents]);

//     const handleDateClick = (selected) => {
//       setSelectedDate(selected);
//       setIsDialogOpen(true);
//     };

//     const handleEventClick = (selected) => {
//       if (
//         window.confirm(
//           `Are you sure you want to delete the event "${selected.event.title}"?`
//         )
//       ) {
//         selected.event.remove();
//       }
//     };

//     const handleCloseDialog = () => {
//       setIsDialogOpen(false);
//       setNewEventTitle("");
//     };

//     const add = (e) => {
//       e.preventDefault();
//       if (newEventTitle && selectedDate) {
//         const calendarApi = selectedDate.view.calendar;
//         calendarApi.unselect();

//         const newEvent = {
//           id: `${selectedDate.start.toISOString()}-${newEventTitle}`,
//           title: newEventTitle,
//           start: selectedDate.start,
//           end: selectedDate.end,
//           allDay: selectedDate.allDay,
//         };

//         calendarApi.addEvent(newEvent);
//         handleCloseDialog();
//       }
//     };
//     const addCustomStyles = () => {
//       if (calendarRef.current && calendarRef.current.el) {
//         const calendarContainer = calendarRef.current.el;
    
//         // Select navigation buttons
//         const prevButton = calendarContainer.querySelector(".fc-prev-button");
//         const nextButton = calendarContainer.querySelector(".fc-next-button");
    
//         [prevButton, nextButton].forEach((button) => {
//           if (button) {
//             // Apply Tailwind classes
//             button.classList.add("text-white", "bg-transparent", "border-none");
    
//             // Ensure SVG icons are styled
//             const svg = button.querySelector("svg");
//             if (svg) {
//               svg.classList.add("text-white", "w-5", "h-5");
//             }
//           }
//         });
//       }
//     };
    
  
//     useEffect(() => {
//       const timer = setTimeout(() => {
//         addCustomStyles();
//       }, 100); // Delay to ensure the calendar is fully rendered
//       return () => clearTimeout(timer); // Clean up the timer
//     }, []);
  

//     return (
// <div className="min-h-screen text-white p-6 m-2 border border bg-[#FFFFFF] rounded-xl">
//   <div className="flex flex-col lg:flex-row w-full px-4 lg:px-10 justify-start items-start gap-8">
//     {/* Event List Section */}
//     <div className="w-full lg:w-3/12">
//       <div className="py-10 text-2xl font-extrabold text-center px-7">
//         Calendar Events
//       </div>
//       <ul className="space-y-4">
//         {currentEvents.length <= 0 && (
//           <div className="italic text-center text-gray-400">
//             No Events Present
//           </div>
//         )}
//         {currentEvents.length > 0 &&
//           currentEvents.map((event) => (
//             <li
//               className="border border-gray-200 shadow px-4 py-2 rounded-md text-blue-800"
//               key={event.id}
//             >
//               {event.title}
//               <br />
//               <label className="text-slate-950">
//                 {formatDate(event.start, {
//                   year: "numeric",
//                   month: "short",
//                   day: "numeric",
//                 })}
//               </label>
//             </li>
//           ))}
//       </ul>
//     </div>

//     {/* Calendar Section */}
//     <div className="w-full lg:w-9/12 mt-8">
//     <div className="flex flex-col items-center justify-center gap-4 mb-4 border-b border-gray-300 pb-4">
//     {/* Month and Year Selectors */}
//         <div className="flex flex-wrap justify-center gap-4">
//           <select
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
//             className="border border-gray-700 p-2 rounded-md"
//           >
//             {Array.from({ length: 12 }, (_, i) => (
//               <option key={i} value={i}>
//                 {new Date(0, i).toLocaleString("default", { month: "long" })}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(parseInt(e.target.value))}
//             className="border border-gray-300 p-2 rounded-md"
//           >
//             {Array.from({ length: 21 }, (_, i) => (
//               <option key={i} value={2020 + i}>
//                 {2020 + i}
//               </option>
//             ))}
//           </select>

//           <button
//             onClick={handleMonthYearChange}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Go
//           </button>
//         </div>
//       </div>
  

//       <FullCalendar
//         ref={calendarRef}
//         height={"85vh"}
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         headerToolbar={{
//           left: isMobile ? "prev" : "prev,next today",
//           center: "title",
//           right: isMobile ? "next" : "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
//         }}

//         initialView="dayGridMonth"
//         editable={true}
//         selectable={true}
//         selectMirror={true}
//         dayMaxEvents={true}
//         select={handleDateClick}
//         eventClick={handleEventClick}
//         eventsSet={(events) => setCurrentEvents(events)}
//         initialEvents={
//           typeof window !== "undefined"
//             ? JSON.parse(localStorage.getItem("events") || "[]")
//             : []
//         }
//         datesSet={addCustomStyles}
//       />
//     </div>
//   </div>

//   {/* Dialog for Adding Event */}
//   <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//     <DialogContent>
//       <DialogHeader>
//         <DialogTitle>Add New Event Details</DialogTitle>
//       </DialogHeader>

//       {/* Event Title Input */}
//       <input
//         type="text"
//         placeholder="Event Title"
//         value={newEventTitle}
//         onChange={(e) => setNewEventTitle(e.target.value)}
//         required
//         className="border border-gray-200 p-3 text-black rounded-md text-lg w-full mb-4"
//       />

//       {/* Status Options */}
//       <div className="space-y-4">
//         <label className="font-medium">Status</label>
//         <div className="flex flex-col gap-2">
//           {[
//             "Compiled",
//             "Pending",
//             "PendingRejected",
//             "Future",
//             "ChecklistCompiled",
//             "ChecklistPending",
//           ].map((status) => (
//             <label key={status}>
//               <input
//                 type="checkbox"
//                 name="status"
//                 value={status}
//                 onChange={(e) => setNewEventTitle(e.target.value)}
//                 className="mr-2"
//               />
//               {status}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Add Button */}
//       <button
//         className="bg-green-500 text-black p-3 mt-5 rounded-md w-full sm:w-auto"
//         onClick={AddNewEvent}
//       >
//         Add
//       </button>
//     </DialogContent>
//   </Dialog>
// </div>

//     );
//   };

//   export default Calendar;
