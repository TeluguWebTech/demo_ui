import React from "react";

export default function RevenueSegments() {
  return (
    <div className="bg-white p-3 rounded-lg shadow flex items-center space-x-3">
      {/* Segment 1 */}
      <div className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-full w-full">
        <img
          src="/img/m-1.jpg" 
          alt="User 1"
          className="w-6 h-6 rounded-full"
        />
        <span className="ml-2 text-lg font-semibold">$209,633</span>
        <span className="ml-2 text-gray-500 text-sm">39.63%</span>
      </div>

      {/* Segment 2 */}
      <div className="flex justify-between  items-center bg-gray-100 px-3 py-2 rounded-full w-full">
        <img
          src="/img/m-2.jpg" 
          alt="User 2"
          className="w-6 h-6 rounded-full"
        />
        <span className="ml-2 text-lg font-semibold">$156,841</span>
        <span className="ml-2 text-gray-500 text-sm">29.65%</span>
      </div>

      {/* Segment 3 */}
      <div className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-full w-full">
        <img
          src="/img/m-3.jpg" 
          alt="User 3"
          className="w-6 h-6 rounded-full"
        />
        <span className="ml-2 text-lg font-semibold">$117,115</span>
        <span className="ml-2 text-gray-500 text-sm">22.14%</span>
      </div>

      {/* Segment 4 */}
      <div className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-full w-full">
        <span className="w-6 h-6 flex items-center justify-center font-bold text-white bg-black rounded-full">
          C
        </span>
        <span className="ml-2 text-lg font-semibold">$45,386</span>
        <span className="ml-2 text-gray-500 text-sm">8.58%</span>
      </div>

      {/* Details Button */}
      <button className="bg-black text-white px-4 py-2 rounded-full">
        Details
      </button>
    </div>
  );
}
