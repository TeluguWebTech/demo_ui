import React from "react";
import Chart from "react-apexcharts";
import RevenueChart from "./RevenueChart";

export default function ReferralStats() {
  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 5,
      },
    },
    xaxis: {
     
    },
    colors: ["#EA4C89", "#E4405F", "#053EFF", "#4285F4"],
    dataLabels: { enabled: false },
  };

  const chartSeries = [
    {
      name: "Deals Amount",
      data: [59, 23,35, 28, 22, 33, 44],
    },
  ];

  return (
    <div className="w-full">
        <div className="w-full h-98 grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Left Card - Referral List */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold">Locations</span>
          <button className="text-gray-500 text-sm px-3 py-1 border rounded-lg">
            Filters
          </button>
        </div>
        <div className="space-y-3">
          {[
            { name: "Texas", amount: "$227,459",  color: "#EA4C89" },
            { name: "Washinton", amount: "$142,823",  color: "#E4405F" },
            { name: "Dacota", amount: "$89,935",  color: "#053EFF" },
            { name: "NewYork", amount: "$37,028",  color: "#4285F4" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
              <span className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="font-medium text-sm">{item.name}</span>
              </span>
              <span className="font-semibold">{item.amount}</span>
              <span className="text-gray-500 text-sm">{item.percent}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Card - Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold">Revenue</span>
          <button className="text-gray-500 text-sm px-3 py-1 border rounded-lg">
            Filters
          </button>
        </div>
        <Chart options={chartOptions} series={chartSeries} type="bar" height={200} />
      </div>
    </div>
      <RevenueChart />
    </div>
  );
}
