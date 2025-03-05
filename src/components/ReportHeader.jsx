import { useState } from "react";

export default function ReportHeader() {
  const [isTimeframeActive, setIsTimeframeActive] = useState(true);

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
      {/* Left Section - Title */}
      <h2 className="text-xl text-gray-400 font-semibold">New report</h2>

      {/* Right Section - Timeframe Toggle & Date Selector */}
      <div className="flex items-center space-x-3">
        {/* Toggle Switch */}
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isTimeframeActive}
            onChange={() => setIsTimeframeActive(!isTimeframeActive)}
            className="hidden"
          />
          <div
            className={`w-10 h-5 rounded-full p-1 transition duration-300 ${
              isTimeframeActive ? "bg-black" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-3.5 h-3.5 bg-white rounded-full transition-transform ${
                isTimeframeActive ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        </label>

        {/* Timeframe Label & Dropdown */}
        <span className="text-gray-600 font-medium">Timeframe</span>
        <select className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg outline-none">
          <option>Feb 1 - Feb 28, 2025</option>
          <option>Jun 1 - Aug 31, 2023</option>
        </select>
      </div>
    </div>
  );
}
