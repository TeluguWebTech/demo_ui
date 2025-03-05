import React from "react";

const UpRow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full flex-col">
      {/* Data Row */}
      <div className="flex items-center justify-between">
        {/* Avatar & Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/img/m-2.jpg"
            alt="User"
            className="rounded-full w-8 h-8"
          />
          <span className="font-semibold">Mikasa A.</span>
        </div>

        {/* Revenue */}
        <div className="text-gray-900 font-semibold">$156,841</div>

        {/* Leads */}
        <div className="flex space-x-2 items-center">
          <span className="bg-black text-white px-2 py-1 rounded-full text-sm">54</span>
          <span className="text-gray-700">103</span>
        </div>

        {/* KPI */}
        <div className="text-gray-700">0.89</div>

        {/* Win/Loss Ratio */}
        <div className="flex space-x-2 items-center">
          {/* <span className="text-gray-700">39%</span> */}
        {/* <button className="text-pink-500 text-sm">⬆</button> */}
          <span className="bg-black text-white px-2 py-1 rounded-full text-sm">21</span>
          <span className="text-gray-700">33</span>
        </div>

        {/* Arrow Icon */}
      </div>

      {/* Badges */}
      <div className="flex space-x-2 mt-3">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
          Top sales 👍
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
          Sales streak 🔥
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
          Top review 👍
        </span>
      </div>
    </div>
  );
};

export default UpRow;
