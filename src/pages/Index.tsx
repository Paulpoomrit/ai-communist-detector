
import React from 'react';
import Navbar from '@/components/Navbar';
import Monitor from '@/components/Monitor';
import Controls from '@/components/Controls';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto p-4">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center max-w-[1920px] mx-auto">
          <div className="h-full flex items-center justify-end scale-140 md:translate-y-[5%] md:translate-x-[10%] md:scale-125 lg:scale-[1.425] xl:scale-[1.475] transform-gpu">
            <Monitor />
          </div>
          <div className="h-full flex items-center md:translate-x-[10%] transform-gpu">
            <Controls />
          </div>
        </div>
      </div>
      <footer className="py-4 text-center text-gray-600 font-pixelify flex items-center justify-center gap-1">
        made with <Heart className="h-4 w-4 text-red-500 fill-current" /> in Vancouver
      </footer>
    </div>
  );
};

export default Index;
