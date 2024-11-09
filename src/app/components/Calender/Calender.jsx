"use client";
import "./Calender.css";
import React, { useState, useEffect } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const statuses = [
  "Compiled",
  "Pending",
  "PendingRejected",
  "Future",
  "Checklist Compiled",
  "Checklist Pending",
];

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState(""); // State for the selected status

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setIsDialogOpen(true);
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event "${selected.event.title}"?`
      )
    ) {
      selected.event.remove();
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setNewEventTitle("");
  };

  const AddNewEvent = (e) => {
    e.preventDefault();
    if (newEventTitle && selectedDate) {
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();

      const newEvent = {
        id: `${selectedDate.start.toISOString()}-${newEventTitle}`,
        title: newEventTitle,
        start: selectedDate.start,
        end: selectedDate.end,
        allDay: selectedDate.allDay,
        status: status, // Add status to the event
      };

      calendarApi.addEvent(newEvent);
      handleCloseDialog();
    }
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

  return (
    <div className="m-5">
      <div className="flex flex-col lg:flex-row w-full px-4 lg:px-10 justify-start items-start gap-8">
        {/* Event List Section */}
        <div className="w-full lg:w-3/12">
          <div className="py-10 text-2xl font-extrabold text-center px-7">
            Calendar Events
          </div>
          <ul className="space-y-4">
            {currentEvents.length <= 0 && (
              <div className="italic text-center text-gray-400">
                No Events Present
              </div>
            )}
            {currentEvents.length > 0 &&
              currentEvents.map((event) => (
                <li
                  className="border border-gray-200 shadow px-4 py-2 rounded-md text-blue-800"
                  key={event.id}
                >
                  {event.title}
                  <br />
                  <label className="text-slate-950">
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </label>
                </li>
              ))}
          </ul>
        </div>

        {/* Calendar Section */}
        <div className="w-full lg:w-9/12 mt-8">
          <FullCalendar
            height={"85vh"}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={
              typeof window !== "undefined"
                ? JSON.parse(localStorage.getItem("events") || "[]")
                : []
            }
            dayCellContent={(cell) => (
              <span className="text-sm hover:text-dark dark:hover:text-white transition-colors ease-in-out duration-300">
                {cell.date.getDate()}
              </span>
            )}
            dayCellClassNames={(date) => {
              return 'cursor-pointer hover:bg-gray-300 hover:text-dark rounded-md transition-all ease-in-out';
            }}
          />
        </div>
      </div>

      {/* Dialog for Adding Event */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        className={`fixed inset-0 z-50 flex items-center justify-center ${isDialogOpen ? "block" : "hidden"}`}
      >
        <DialogContent className="bg-white p-4 rounded-md shadow-lg w-full sm:w-96 max-w-full">
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
            className="border border-gray-200 p-3 rounded-md text-lg w-full mb-4"
          />

          {/* Status Options */}
          <div className="space-y-4">
            <label className="font-medium">Status</label>
            <div className="flex flex-col gap-2">
              {statuses.map((statusOption) => (
                <label key={statusOption}>
                  <input
                    type="radio"
                    name="status"
                    value={statusOption}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mr-2"
                  />
                  {statusOption}
                </label>
              ))}
            </div>
          </div>

          {/* Add Button */}
          <button
            className="bg-green-500 text-white p-3 mt-5 rounded-md w-full sm:w-auto"
            onClick={AddNewEvent}
          >
            Add
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Calendar;
