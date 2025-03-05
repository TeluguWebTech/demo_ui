import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTachometerAlt, FaUsers, FaGamepad, FaChartLine } from 'react-icons/fa';
import Dashboard from './Dashboard';

const SidebarComp = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState("Dashboard"); // Default open "Dashboard"

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, subItems: ['Overview', 'Reports', 'Analytics'] },
    { name: 'Clients', icon: <FaUsers />, subItems: ['List', 'Add Client', 'Support'] },
    { name: 'Machines', icon: <FaGamepad />, subItems: ['Active', 'Maintenance', 'New Installation'] },
    { name: 'Revenue', icon: <FaChartLine />, subItems: ['Daily', 'Monthly', 'Yearly'] },
  ];

  return (
    <div className="sideContainer">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center space-x-2 p-4">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold">
            C
          </div>
          <span className="font-semibold text-gray-800">IntelFaze.com</span>
        </div>

        {/* Menu Items */}
        <div className="mt-8">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <div
                  className="menu-title flex items-center space-x-2 p-3 cursor-pointer"
                  onClick={() => toggleDropdown(item.name)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{isOpen && item.name}</span>
                  {isOpen && (
                    <FaChevronDown
                      className={`ml-auto transition-transform ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
                {openDropdown === item.name && (
                  <ul className="submenu ml-6">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="submenu-item p-2 text-gray-700">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <Dashboard />
    </div>
  );
};

export default SidebarComp;
