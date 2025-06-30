import React from 'react';
import ChatBox from './ChatBox';
import ScreenshotViewer from './ScreenshotViewer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Gmail Automation Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-semibold mb-4">Chat with Assistant</h2>
              <ChatBox />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-semibold mb-4">Automation Progress</h2>
              <ScreenshotViewer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
