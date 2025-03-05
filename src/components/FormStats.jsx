import React from "react";

const FormStats = () => {
  const platforms = [
    // { name: "Instagram", logo: "📸", percentage: "28.1%", revenue: "$46,072", bg: "bg-pink-100" },
    // { name: "Google", logo: "🌐", percentage: "14.1%", revenue: "$22,116", bg: "bg-gray-100" },
    { name: "Other", logo: "✅", percentage: "7.1%", revenue: "$11,135", bg: "bg-gray-100" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-80">
      {/* Eye Icon & Total Revenue */}
      <div className="flex justify-between items-center mb-3">
        <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">👁 3</span>
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">$156,841</span>
      </div>

      {/* Platform Cards */}
      <div className="space-y-3">
        {platforms.map((platform, index) => (
          <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${platform.bg}`}>
            <div className="flex items-center space-x-2">
              <span className="text-xl">{platform.logo}</span>
              <span className="text-gray-700 font-medium">{platform.name}</span>
            </div>
            <div className="text-right">
              <span className="block font-bold text-black">{platform.percentage}</span>
              <span className="text-gray-400 text-sm">{platform.revenue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormStats;
