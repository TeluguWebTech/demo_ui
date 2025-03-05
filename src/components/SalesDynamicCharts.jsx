import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import UserInfoCard from "./UserInfoCard";

const data = [
  { week: "W1", sales: 20, prevSales: 15 },
  { week: "W3", sales: 50, prevSales: 35 },
  { week: "W5", sales: 80, prevSales: 60 },
  { week: "W7", sales: 40, prevSales: 55 },
  { week: "W9", sales: 70, prevSales: 65 },
  { week: "W11", sales: 90, prevSales: 80 },
];

const SalesDynamicChart = () => {
  return (
  <div className="">
      <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Sales Dynamic</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8B0000"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="prevSales"
            stroke="#C0C0C0"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <UserInfoCard />
  </div>
  );
};

export default SalesDynamicChart;
