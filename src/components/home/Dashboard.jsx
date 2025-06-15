import React from "react";
import { CreditCard } from "./C1";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Reviews Panel */}
        <div className="bg-white rounded-2xl p-4 shadow-md col-span-1">
          <p className="text-sm text-gray-500">15K reviews on</p>
          <div className="flex items-center mt-2 space-x-2">
            <span className="text-yellow-400 text-lg">⭐ 4.9</span>
            {/* Avatars */}
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/30?img=${i + 1}`}
                  alt="avatar"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center col-span-1">
          <div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mb-3">
            🔔
          </div>
          <h2 className="text-3xl font-bold">236k</h2>
          <p className="text-sm text-gray-500 mt-1 text-center">
            People viewed this product
          </p>
        </div>

        {/* Credit Card */}
        <CreditCard />

        {/* Analytics Chart Placeholder */}
        <div className="bg-gray-900 text-white rounded-2xl p-4 shadow-md col-span-1">
          <h3 className="text-sm mb-2">Analytics</h3>
          <h2 className="text-2xl font-bold">5k+</h2>
          {/* You can use chart.js or recharts here */}
          <div className="h-24 bg-gray-800 mt-4 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">[Chart]</span>
          </div>
        </div>

        {/* Progress Grid Placeholder */}
        <div className="bg-white rounded-2xl p-4 shadow-md col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold mb-3">Progress</h3>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < 14 ? "bg-orange-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
