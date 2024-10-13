"use client";
import React, { useState } from "react";
import "./Calender.css";

const statuses = [
  "Compiled",
  "Pending",
  "PendingRejected",
  "Future",
  "Checklist Compiled",
  "Checklist Pending",
];

const Calendar = () => {
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [customYear, setCustomYear] = useState(new Date().getFullYear());
  const [customMonth, setCustomMonth] = useState(new Date().getMonth() + 1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const days = Array.from(
    { length: daysInMonth(currentMonth + 1, currentYear) },
    (_, i) => i + 1
  );

  const addEvent = () => {
    if (selectedDate) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [`${currentYear}-${currentMonth + 1}-${selectedDate}`]: selectedStatus,
      }));
      setSelectedDate(null);
      setSelectedStatus([]);
      setIsModalOpen(false); // Close modal after adding event
    }
  };

  const handleCustomMonthChange = (e) => {
    setCustomMonth(parseInt(e.target.value, 10) - 1);
  };

  const handleCustomYearChange = (e) => {
    setCustomYear(parseInt(e.target.value, 10));
  };

  const applyCustomDate = () => {
    setCurrentYear(customYear);
    setCurrentMonth(customMonth);
  };

  const toggleStatus = (status) => {
    setSelectedStatus((prevStatuses) =>
      prevStatuses.includes(status)
        ? prevStatuses.filter((s) => s !== status)
        : [...prevStatuses, status]
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setIsModalOpen(true); // Open modal on date click
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when needed
    setSelectedDate(null);
    setSelectedStatus([]);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePreviousMonth}>
          Prev
        </button>
        <h1 className="calendar-title">{`${new Date(
          currentYear,
          currentMonth
        ).toLocaleString("default", { month: "long" })} ${currentYear}`}</h1>
        <button className="nav-button" onClick={handleNextMonth}>
          Next
        </button>
      </div>

      <div className="status-icons-container">
        {statuses.map((status) => (
          <div key={status} className="status-icon-wrapper">
            <i
              className={`status-icon icon-${status
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            />
            <span className="status-label">{status}</span>
          </div>
        ))}
      </div>

      <div className="custom-date-inputs">
        <input
          type="number"
          className="custom-date-input"
          value={customMonth + 1}
          onChange={handleCustomMonthChange}
          min="1"
          max="12"
        />
        <input
          type="number"
          className="custom-date-input"
          value={customYear}
          onChange={handleCustomYearChange}
        />
        <button className="apply-date-button" onClick={applyCustomDate}>
          Apply
        </button>
      </div>

      <div className="calendar-grid">
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day ${events[`${currentYear}-${currentMonth + 1}-${day}`] ? "event" : ""}`}
            onClick={() => handleDateClick(day)}
          >
            <span className="day-number">{day}</span>
            {events[`${currentYear}-${currentMonth + 1}-${day}`] && (
              <div className="event-status-container">
                {events[`${currentYear}-${currentMonth + 1}-${day}`].map(
                  (status) => (
                    <a
                      key={status}
                      href={"/"}
                      className={`event-status-icon ${status
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <i
                        className={`status-icon icon-${status
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      />
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="event-form bg-black p-8 rounded-3xl shadow-lg max-w-lg mx-auto mt-8 relative">
            <button className="close-button" onClick={closeModal}>✖</button>
            <h2 className="event-form-title text-4xl font-bold text-white mb-6 text-center transition-transform duration-200 hover:text-gray-300 hover:scale-101 hover:bold">  
                          Add Event for {`${selectedDate}/${currentMonth + 1}/${currentYear}`}
            </h2>
            <div className="status-selector grid grid-cols-2 gap-4 mb-6">
              {statuses.map((status) => (
                <label
                  key={status}
                  className="status-option flex items-center space-x-3 bg-gray-800 p-2 rounded-lg shadow-sm transform transition-transform duration-200 hover:scale-105" // Add Tailwind classes here
                  >
                  <input
                    type="checkbox"
                    checked={selectedStatus.includes(status)}
                    onChange={() => toggleStatus(status)}
                    className="form-checkbox h-6 w-6 text-white border-white rounded focus:ring-2 focus:ring-white"
                    />
                  <span className="text-white font-medium">{status}</span>
                </label>
              ))}
            </div>
            <button
              className="add-event-button w-full bg-gray-700 text-white font-semibold py-3 rounded-xl focus:ring-white  transform transition-transform duration-200 hover:scale-102"
              onClick={addEvent}
            >
              Add Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;