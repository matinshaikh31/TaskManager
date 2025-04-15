// UpcomingPage.jsx
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { FaCalendarAlt } from 'react-icons/fa';

const TaskSection = ({ title, tasks }) => (
  <div className="bg-white rounded-xl shadow p-4 space-y-2 w-full ">
    <h2 className="font-bold text-lg text-gray-800">{title}</h2>
    <button className="w-full flex items-center justify-start gap-2 text-gray-500 text-sm border rounded-lg px-4 py-2 hover:bg-gray-100">
      <FiPlus className="text-base" /> Add New Task
    </button>
    <ul className="space-y-1">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-center justify-between px-2 py-2 text-sm hover:bg-gray-50 rounded-md cursor-pointer">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-gray-400" />
            <span className="text-gray-700">{task}</span>
          </div>
          <FaCalendarAlt className="text-gray-400 text-xs" />
        </li>
      ))}
    </ul>
  </div>
);

export default function UpcomingPage() {
  const todayTasks = [
    'Research content ideas',
    'Create a database of guest authors',
    "Renew driver's license",
    'Consult accountant'
  ];
  const tomorrowTasks = [
    'Create job posting for SEO specialist',
    'Request design assets for landing page'
  ];
  const weekTasks = [
    'Research content ideas',
    'Create a database of guest authors',
    "Renew driver's license",
    'Consult accountant',
    'Print business card'
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center text-3xl font-bold text-gray-800">
        Upcoming
        <span className="ml-2 text-white bg-black rounded-md px-2 text-xl">12</span>
      </div>

      <TaskSection title="Today" tasks={todayTasks} />

      <div className="flex flex-col lg:flex-row gap-4">
        <TaskSection title="Tomorrow" tasks={tomorrowTasks} />
        <TaskSection title="This Week" tasks={weekTasks} />
      </div>
    </div>
  );
}
