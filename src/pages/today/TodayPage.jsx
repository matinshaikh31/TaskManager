// TodayPage.jsx
import React, { useState } from "react";
import { FiPlus, FiChevronRight, FiCalendar, FiTrash2 } from "react-icons/fi";

export default function TodayPage() {
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = [
    { title: "Research content ideas" },
    { title: "Create a database of guest authors" },
    {
      title: "Renew driver's license",
      due: "22-03-22",
      subtasks: 1,
      list: "Personal",
    },
    { title: "Consult accountant", subtasks: 3, list: "List 1" },
    { title: "Print business card" },
  ];

  return (
    <div className="flex gap-6 text-sm font-sans max-h-full overflow-hidden">
      {/* Left - Task List */}
      <div className="flex-1">
        <div className="flex items-center text-2xl font-bold mb-4">
          Today{" "}
          <span className="ml-2 text-base bg-gray-200 px-2 rounded">5</span>
        </div>

        <div className="bg-white rounded shadow p-4">
          <div className="border border-gray-100 rounded  p-2 flex items-center justify-between "> 
            <button className="flex items-center gap-2 text-gray-500">
              <FiPlus /> Add New Task
            </button>
          </div>

          {tasks.map((task, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedTask(task)}
              className="flex justify-between items-center border-b py-4 ml-2 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span>{task.title}</span>
              </div>
              <FiChevronRight className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Right - Task Detail */}
      {selectedTask && (
        <div className="w-96 bg-white rounded shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Task:</h2>
            <button onClick={() => setSelectedTask(null)} className="text-xl">
              ×
            </button>
          </div>

          <input
            type="text"
            className="w-full border rounded p-2 mb-2"
            value={selectedTask.title}
          />

          <textarea
            placeholder="Description"
            className="w-full border rounded p-2 mb-4"
            rows={3}
          ></textarea>

          <div className="flex items-center gap-2 mb-4">
            <label>List</label>
            <select className="border p-2 rounded text-sm">
              <option>Personal</option>
              <option>Work</option>
              <option>List 1</option>
            </select>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <label>Due date</label>
            <input type="date" className="border p-2 rounded text-sm" />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Tags</label>
            <div className="flex gap-2">
              <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs">
                Tag 1
              </span>
              <button className="bg-gray-100 px-2 py-1 rounded text-xs">
                + Add Tag
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Subtasks:</h3>
            <button className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <FiPlus /> Add New Subtask
            </button>
            <div className="flex items-center gap-2">
              <input type="checkbox" /> <span>Subtask</span>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button className="text-red-500 flex items-center gap-1">
              <FiTrash2 /> Delete Task
            </button>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500">
              Save changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
