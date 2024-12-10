import React from 'react';

const TransactionLog = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h2 className="text-lg font-semibold mb-6">Transaction Log</h2>
      <div className="space-y-2">
        <div className="text-gray-500 text-center py-4">
          No transactions recorded
        </div>
      </div>
    </div>
  );
};

export default TransactionLog;