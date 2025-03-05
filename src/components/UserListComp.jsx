import { FaPlus, FaDownload, FaShareAlt } from "react-icons/fa";

const users = [
  { name: "Armin A.", image: "https://via.placeholder.com/40" },
  { name: "Eren Y.", image: "https://via.placeholder.com/40" },
  { name: "Mikasa A.", image: "https://via.placeholder.com/40" },
];

export default function UserListComp() {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md w-full">
      {/* Left Section - Users */}
      <div className="flex items-center space-x-2">
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
          <FaPlus className="text-gray-600" />
        </button>

        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">{user.name}</span>
          </div>
        ))}

        {/* Custom 'C' Icon */}
        <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full font-semibold">
          C
        </div>
      </div>

      {/* Right Section - Action Buttons */}
      <div className="flex items-center space-x-2">
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
          <FaShareAlt className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
          <FaDownload className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
