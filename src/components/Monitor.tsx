
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Monitor = () => {
  return (
    <div className="relative w-full max-w-[810px] aspect-[810/720] mx-auto">
      <div 
        className="relative w-full h-full bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("/lovable-uploads/a413fd98-c0ed-4f34-ab9f-79983264ebcb.png")' }}
      >
        {/* Screen content positioned relative to monitor image */}
        <div 
          className="absolute top-[10%] left-[9%] w-[82%] h-[61%] rounded bg-[#1903bd] flex items-center justify-center overflow-y-auto"
        >
          <div className="w-full py-4 flex items-center justify-center text-[#dadada] pixelated text-xl">
            Screen Content Coming Soon...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
