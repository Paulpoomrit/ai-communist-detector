
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Monitor = () => {
  return (
    <div className="w-[810px] mx-auto">
      <AspectRatio ratio={810/720}>
        <div 
          className="relative w-full h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: 'url("/lovable-uploads/a413fd98-c0ed-4f34-ab9f-79983264ebcb.png")' }}
        >
          {/* Screen content positioned relative to monitor image */}
          <div 
            className="absolute top-[18.5%] left-[5%] w-[89%] h-[49%] rounded bg-[#1903bd] flex items-center justify-center"
          >
            <div className="w-full h-full flex items-center justify-center text-[#dadada] pixelated text-xl">
              Screen Content Coming Soon...
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default Monitor;
