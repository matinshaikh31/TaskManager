// StickyWallPage.jsx
import React from "react";
import { CiSquarePlus } from "react-icons/ci";


const notes = [
  {
    title: "Social Media",
    content: [
      "Plan social content",
      "Build content calendar",
      "Plan promotion and distribution",
    ],
    bg: "bg-yellow-200",
    text: "text-black",
  },
  {
    title: "Content Strategy",
    content: [
      `Would need time to get insights (goals, personals, budget, audits), but after, it would be good to focus on assembling my team (start with SEO specialist, then perhaps an email marketer?). Also need to brainstorm on tooling.`,
    ],
    bg: "bg-blue-100",
    text: "text-black",
  },
  {
    title: "Email A/B Tests",
    content: ["Subject lines", "Sender", "CTA", "Sending times"],
    bg: "bg-red-100",
    text: "text-black",
  },
  {
    title: "Banner Ads",
    content: [
      "Notes from the workshop:",
      "Sizing matters",
      "Choose distinctive imagery",
      "The landing page must match the display ad",
    ],
    bg: "bg-orange-200",
    text: "text-black",
  },
];

const StickyWallPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Sticky Wall</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow p-4 ${note.bg} ${note.text} min-h-[180px]`}
          >
            <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              {note.content.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="rounded-2xl shadow p-4 bg-gray-200 flex items-center justify-center min-h-[180px] cursor-pointer hover:bg-gray-300 transition">
          <CiSquarePlus className="text-gray-600 w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default StickyWallPage;
