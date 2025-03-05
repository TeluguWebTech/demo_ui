import React from "react";
import UpRow from "./UpRow";
import WithPlatforms from "./WIthPlatforms";
import SalesDynamicChart from "./SalesDynamicCharts";

const SalesRow = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      {/* Header Row */}
      <div className="grid grid-cols-6 gap-4 items-center text-gray-700 font-medium">
        <div>Sales</div>
        <div>Revenue</div>
        <div>Leads</div>
        <div>KPI</div>
        <div>W/L</div>
      </div>

      {/* Data Row */}
      <div className="bg-white p-4 rounded-lg flex items-center justify-between mt-2 shadow">
        {/* Avatar & Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/img/team-1.jpg"
            alt="User"
            className="rounded-full w-8 h-8"
          />
          <span className="font-semibold">Armin A.</span>
        </div>

        {/* Revenue */}
        <div className="text-gray-900 font-semibold">$209,633</div>

        {/* Leads */}
        <div className="flex space-x-2 items-center">
          <span className="bg-black text-white px-2 py-1 rounded-full text-sm">41</span>
          <span className="text-gray-700">118</span>
        </div>

        {/* KPI */}
        <div className="text-gray-700">0.84</div>

        {/* Win/Loss Ratio */}
        <div className="flex space-x-2 items-center">
          <span className="bg-black text-white px-2 py-1 rounded-full text-sm">12</span>
          <span className="text-gray-700">29</span>
        </div>
      </div>
      <UpRow />
      <WithPlatforms />
      <SalesDynamicChart />
    </div>
  );
};

export default SalesRow;
