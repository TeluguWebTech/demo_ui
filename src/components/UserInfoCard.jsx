import React from "react";

const UserInfoCard = () => {
  return (
    <div className="flex items-center bg-white shadow-md p-4 rounded-lg w-full">
      {/* Profile Image */}
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Eren Y."
        className="w-10 h-10 rounded-full mr-3"
      />
      
      {/* User Details */}
      <div className="flex-grow">
        <h3 className="font-semibold">Eren Y.</h3>
        <span className="text-gray-600 text-sm">$117,115</span>
      </div>

      {/* Stats */}
      <div className="flex items-center space-x-3">
        <span className="bg-black text-white px-2 py-1 rounded-md text-sm">22</span>
        <span className="bg-gray-200 px-2 py-1 rounded-md text-sm">84</span>
        <span className="text-sm">0.79</span>
        <span className="text-sm">32%</span>
        <span className="bg-black text-white px-2 py-1 rounded-md text-sm">7</span>
        <span className="text-sm">15</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
