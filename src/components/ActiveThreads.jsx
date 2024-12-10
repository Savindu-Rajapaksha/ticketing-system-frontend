import React from 'react';

const ActiveThreads = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h2 className="text-lg font-semibold mb-6">Active Threads</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Vendor Threads</span>
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            0
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Customer Threads</span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActiveThreads;