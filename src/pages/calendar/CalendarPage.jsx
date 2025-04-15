// CalendarPage.jsx
import { Calendar, momentLocalizer } from 'react-big-calendar';;
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import './custom-calendar.css';
import moment from 'moment'; 

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Session 1: Marketing Sprint',
    start: new Date(2022, 1, 16, 9, 0),
    end: new Date(2022, 1, 16, 10, 0),
    type: 'work',
  },
  {
    title: 'Sales Catchup',
    start: new Date(2022, 1, 16, 10, 0),
    end: new Date(2022, 1, 16, 11, 0),
    type: 'work',
  },
  {
    title: "Renew driver's license",
    start: new Date(2022, 1, 16, 11, 0),
    end: new Date(2022, 1, 16, 12, 0),
    type: 'personal',
  },
];

export default function CalendarPage() {
  const [view, setView] = useState('day');

  return (
    <div className="p-6 h-full">
      <h1 className="text-3xl font-bold mb-4">16 February 2022</h1>
      <div className="mb-4 space-x-2">
        <button onClick={() => setView('day')} className="btn">Day</button>
        <button onClick={() => setView('week')} className="btn">Week</button>
        <button onClick={() => setView('month')} className="btn">Month</button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        defaultView={view}
        views={['day', 'week', 'month']}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        eventPropGetter={(event) => {
          let backgroundColor =
            event.type === 'personal' ? '#FFE4E6' : '#CCF2F4';
          return { style: { backgroundColor, borderRadius: '10px', padding: '10px' } };
        }}
      />
    </div>
  );
}