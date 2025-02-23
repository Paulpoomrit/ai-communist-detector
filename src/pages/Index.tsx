
import React from 'react';
import Navbar from '@/components/Navbar';
import Monitor from '@/components/Monitor';
import Controls from '@/components/Controls';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 mx-auto p-4" style={{ width: '1200px' }}>
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-full flex items-center justify-center">
              <Monitor />
            </div>
            <div className="h-full flex items-center">
              <Controls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
