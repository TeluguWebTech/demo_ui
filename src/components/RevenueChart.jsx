import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sep", revenue: 6901 },
  { name: "Oct", revenue: 11035 },
  { name: "Nov", revenue: 9288 },
  { name: "Sep", revenue: 6901 },
  { name: "Oct", revenue: 11035 },
  { name: "Nov", revenue: 9288 },
  { name: "Sep", revenue: 6901 },
  { name: "Oct", revenue: 11035 },
  { name: "Nov", revenue: 9288 },
  { name: "Sep", revenue: 6901 },
  { name: "Oct", revenue: 11035 },
  { name: "Nov", revenue: 9288 },
];

const RevenueChart = () => {
  const [activeTab, setActiveTab] = useState("Revenue");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Platform value</h2>
          <p className="text-gray-500">Dribbble ▼</p>
        </div>
        <div className="flex space-x-2">
          {["Revenue", "Leads", "W/L"].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded-md ${
                activeTab === tab ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex">


        {/* Chart Section */}
        <div className="w-full">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#E6007A" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
