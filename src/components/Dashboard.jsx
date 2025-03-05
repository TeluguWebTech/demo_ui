import { FaPlus, FaFilter, FaDownload, FaChartLine } from "react-icons/fa";
import ReportHeader from "./ReportHeader";
import RevenueSummary from "./RevenuSummary";
import RevenueSegments from "./RevenueSegments";
import ReferralStats from "./ReferalStats";
import SalesRow from "./SalesRow";
import { HeaderComp } from "./HeaderComp";

const users = [
  { name: "Armin A.", image: "/img/team-1.jpg" },
  { name: "Eren Y.", image: "/img/team-2.jpg" },
  { name: "Mikasa A.", image: "/img/team-3.jpg" },
];

export default function Dashboard() {
  return (
<div className="">
  <HeaderComp />
<div className="min-h-screen  p-4 w-full ">
      {/* Dashboard Content */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        {/* Header - Users and Actions */}
        <div className="flex justify-between items-center mb-4">
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
            <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full font-semibold">
              C
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
              <FaFilter className="text-gray-600" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
              <FaDownload className="text-gray-600" />
            </button>
          </div>
        </div>

            <ReportHeader />
            <RevenueSummary />
            <RevenueSegments />
          <div className="">
          <div className="flex">
<ReferralStats />
<SalesRow />
</div>
          </div>
      </div>
    </div>
</div>
  );
}
