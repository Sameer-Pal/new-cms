// app/calendar/page.jsx
import Calendar from '../components/Calender/Calender'; // Import your Calendar component

export default function CalendarPage() {
    return (
        <div className="rounded-lg shadow-lg px-4 max-w-screen-sm w-full">
            <Calendar /> {/* Render the Calendar component */}
        </div>
    );
}
