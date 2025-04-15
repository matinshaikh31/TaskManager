import React from "react";
import { FiMenu } from "react-icons/fi";

export default function Header({ toggleSidebar }) {
  return (
    <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow-sm fixed top-0 left-0 right-0 z-20">
      <h1 className="text-lg font-semibold">Task App</h1>
      <button onClick={toggleSidebar} className="text-2xl">
        <FiMenu />
      </button>
    </header>
  );
}
