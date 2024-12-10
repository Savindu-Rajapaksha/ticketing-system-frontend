import React, { useState } from 'react';
import Header from './components/Header';
import SystemConfig from './components/SystemConfig';
import ControlPanel from './components/ControlPanel';
import ActiveThreads from './components/ActiveThreads';
import TicketPool from './components/TicketPool';
import TransactionLog from './components/TransactionLog';
import './App.css';

const App = () => {
  const [config, setConfig] = useState({
    totalTickets: 0,
    ticketReleaseRate: 5,
    customerRetrievalRate: 3,
    maxTicketCapacity: 500
  });

  const handleConfigChange = (field, value) => {
    setConfig(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <SystemConfig config={config} onConfigChange={handleConfigChange} />
          <ControlPanel />
          <ActiveThreads />
        </div>

        <div className="space-y-6">
          <TicketPool />
          <TransactionLog />
        </div>
      </div>
    </div>
  );
};

export default App;