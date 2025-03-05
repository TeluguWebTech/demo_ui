import React from "react";
import FormStats from "./FormStats";

const WithPlatforms = () => {
  return (
  <div className="flex">
      <div className="bg-white p-4 rounded-lg shadow-md w-72">
      {/* Title */}
      <h3 className="text-gray-600 text-sm font-medium mb-2">Work with platforms</h3>

      {/* Platform Card */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-4">
          {/* Dribbble Logo */}
          <img
            src="/img/m-1.jpg"
            alt="Dribbble"
            className="w-6 h-6"
          />
          <span className="text-gray-700 font-semibold">Top Sales</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <span className="text-black font-bold text-lg">45.3%</span>
          <span className="text-gray-400 font-semibold text-lg">$71,048</span>
        </div>
      </div>
    </div>
    <FormStats />
  </div>
  );
};

export default WithPlatforms;
