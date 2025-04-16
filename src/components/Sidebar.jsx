import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiCalendar,
  FiGrid,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsListCheck } from "react-icons/bs";

export default function Sidebar({ isOpen, closeSidebar }) {
  const menuItems = [
    { name: "Upcoming", count: 12, path: "/upcoming", icon: <HiOutlineLightBulb /> },
    { name: "Today", count: 5, path: "/today", icon: <BsListCheck /> },
    { name: "Calendar", path: "/calendar", icon: <FiCalendar /> },
    { name: "Sticky Wall", path: "/sticky-wall", icon: <FiGrid /> },
  ];

  const lists = [
    { id: 1, name: "Personal", color: "#f87171", count: 3 },
    { id: 2, name: "Work", color: "#38bdf8", count: 6 },
    { id: 3, name: "List 1", color: "#facc15", count: 3 },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[280px] bg-white border-r border-zinc-100  z-30 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:block
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Header (Mobile close button) */}
      {/* <div className="flex justify-between items-center mb-6">
        <button
          onClick={closeSidebar}
          className="text-2xl md:hidden focus:outline-none"
        >
          ✕
        </button>
      </div> */}

      <div className="p-5">
          <div className="flex justify-between items-center mb-6 max-sm:hidden">
            <h1 className="m-0 text-2xl">Menu</h1>
          </div>

          <div className="relative mb-6 max-sm:hidden">
            <input
              type="search"
              placeholder="Search"
              className="px-3 py-2 w-full text-sm rounded-md border border-solid border-zinc-100"
            />
          </div>

          {/* Tasks */}
          <div className="mb-8">
            <h2 className="mb-4 text-sm text-stone-500">TASKS</h2>
            <ul className="p-0 m-0 flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  className={({ isActive }) =>
                    `flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-zinc-50 ${
                      isActive ? "bg-zinc-100 font-medium" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)} // Close on navigation
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </span>
                  {item.count && (
                    <span className="px-2 py-0.5 text-xs rounded-xl bg-zinc-100">
                      {item.count}
                    </span>
                  )}
                </Link>
              ))}
            </ul>
          </div>

          {/* Lists */}
          <div className="mb-8">
            <h2 className="mb-4 text-sm text-stone-500">LISTS</h2>
            <ul className="p-0 m-0">
              {lists.map((list) => (
                <li
                  className="flex justify-between items-center px-3 py-2 mb-3 rounded-md cursor-pointer hover:bg-zinc-50"
                  key={list.id}
                >
                  <div className="flex gap-2 items-center">
                    <span
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: list.color }}
                    />
                    <span>{list.name}</span>
                  </div>
                  <span className="px-2 py-0.5 text-xs rounded-xl bg-zinc-100">
                    {list.count}
                  </span>
                </li>
              ))}
              <li className="flex gap-2 items-center px-3 py-2 mt-4 cursor-pointer text-stone-500 hover:bg-zinc-50 rounded-md">
                <span>+</span>
                <span>Add New List</span>
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-8 max-sm:hidden">
            <h2 className="mb-4 text-sm text-stone-500">TAGS</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm text-sky-600 bg-sky-100 rounded-2xl">
                Tag 1
              </span>
              <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-2xl">
                Tag 2
              </span>
              <span className="gap-1 px-3 py-1 text-sm bg-gray-50 rounded-2xl text-stone-500">
                + Add Tag
              </span>
            </div>
          </div>

          {/* Settings */}
          <div className="flex flex-col gap-2 text-stone-700">
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md hover:bg-zinc-50">
              <FiSettings />
              <span>Settings</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md hover:bg-zinc-50">
              <FiLogOut />
              <span>Sign out</span>
            </div>
          </div>
        </div>
    </div>
  );
}
