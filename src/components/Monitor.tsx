
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Monitor = () => {
  return (
    <div className="relative w-[810px] h-[720px] mx-auto">
      {/* Screen content layer */}
      <div className="absolute top-[17.5%] left-[7%] w-[89%] h-[49%] rounded z-0" style={{ backgroundColor: '#1903bd' }}>
        {/* Placeholder with aspect ratio container */}
        <div className="w-full h-full">
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full flex items-center justify-center text-[#dadada] pixelated text-xl">
              Screen Content Coming Soon...
            </div>
          </AspectRatio>
        </div>
      </div>
      
      {/* Monitor frame layer */}
      <div 
        className="absolute inset-0 bg-contain bg-no-repeat bg-center z-10"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/a413fd98-c0ed-4f34-ab9f-79983264ebcb.png")',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default Monitor;
