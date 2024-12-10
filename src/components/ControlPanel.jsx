import React from 'react';

const ControlPanel = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h2 className="text-lg font-semibold mb-6">Control Panel</h2>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-7 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
          Start
        </button>
        <button className="flex items-center gap-2 px-7 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Stop
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Restart
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;