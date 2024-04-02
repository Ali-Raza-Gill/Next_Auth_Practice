import React from "react";

const handleLogout = () => {
  // Handle logout logic here
};

const DashboardCard = () => {
  return (
    <div className="flex justify-center items-center ma-h-screen mt-20">
      <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <p className="text-gray-700">Ali Raza{/* Insert name here */}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <p className="text-gray-700">
            raza@gmail.com{/* Insert email here */}
          </p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          //   onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
