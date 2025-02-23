
import React from 'react';
import Navbar from '@/components/Navbar';
import Monitor from '@/components/Monitor';
import Controls from '@/components/Controls';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto p-4 pt-[25%]">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center max-w-[1920px] mx-auto">
            <div className="h-full flex items-end justify-end md:scale-100 lg:scale-110 xl:scale-125 transform-gpu">
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
