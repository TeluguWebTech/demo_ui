import React from "react";

export default function RevenueSummary() {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between space-x-4">
      {/* Revenue Section */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-black">$528,976</span>
          <span className="text-gray-400 text-xl">.82</span>
          <span className="flex items-center bg-red-200 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">
            ▼ 7.9%
          </span>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
            $27,335.09
          </span>
        </div>
        <p className="text-gray-500 text-sm">
          vs prev. $501,641.73 Jan 1 - Dec 31, 2024
        </p>
      </div>

      {/* Top Sales */}
      <div className="bg-gray-100 border border-amber-100 shadow-md px-4 py-2 rounded-lg w-[160px]">
  <p className="text-xs text-gray-500">🏆 Top Sales</p>
  <p className="text-lg font-bold">72</p>
  <div className="flex mt-1 items-center">
    <img
      src="/img/team-4.jpg"
      alt="User Avatar"
      className="w-6 h-6 rounded-full shadow-lg"
    />
    <span className="ml-2 text-sm font-medium">Mikasa</span>
  </div>
</div>


      {/* Best Deal */}
      <div className="bg-black text-white px-4 py-3 rounded-lg w-[160px]">
        <p className="text-xs text-gray-400">💰 Best Deal</p>
        <p className="text-lg font-bold">$42,300</p>
        <p className="text-sm">Rolf Inc.</p>
      </div>

      {/* Stats Cards */}
      <div className="flex space-x-3">
        <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
          <p className="text-xs text-gray-500">📊 Deals</p>
          <p className="text-lg font-bold">256</p>
          <p className="text-xs text-gray-500">▼ 5</p>
        </div>
        <div className="bg-red-100 px-4 py-2 rounded-lg text-center border border-red-300">
          <p className="text-xs text-gray-500">💵 Value</p>
          <p className="text-lg font-bold text-red-600">528k</p>
          <p className="text-xs text-red-500">▼ 7.9%</p>
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
          <p className="text-xs text-gray-500">📈 Win Rate</p>
          <p className="text-lg font-bold text-gray-700">44%</p>
          <p className="text-xs text-gray-500">▲ 1.2%</p>
        </div>
      </div>
    </div>
  );
}
