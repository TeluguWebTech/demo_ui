import { FaBars, FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export function HeaderComp() {
  return (
    <header className="flex justify-between items-center p-4 ">
      {/* Left: Logo */}


      {/* Center: Search Bar */}
      <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm w-1/3">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder='Try searching "insights"'
          className="ml-2 w-full outline-none bg-transparent"
        />
      </div>

      {/* Right: Menu & Profile */}
      <div className="flex items-center space-x-4">
        <FaBars className="text-gray-600 cursor-pointer text-lg" />
        <div className=" w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500">
          <img src="/img/m-2.jpg" className=" rounded-full" alt="" />
        </div>
        <FaPlus className="text-white bg-green-500 p-2 rounded-full cursor-pointer text-lg" />
      </div>
    </header>
  );
}
