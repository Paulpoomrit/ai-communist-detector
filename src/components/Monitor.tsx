"use client";
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ThreeScene from "../components/ThreeScene";

const Monitor = () => {
  return (
    <div className="relative w-full max-w-[810px] aspect-[810/720] mx-auto">
      {/* Add the screen content first, with a lower z-index */}
      <div 
        className="absolute top-[10%] left-[9%] w-[82%] h-[63.5%] rounded bg-[#1903bd] flex items-center justify-center overflow-y-auto z-0"
      >
        {/* <ThreeScene /> */}
        <ThreeScene />
      </div>
      
      {/* Place the monitor image overlay after, with a higher z-index */}
      <div 
        className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center z-20"
        style={{ backgroundImage: 'url("/lovable-uploads/a413fd98-c0ed-4f34-ab9f-79983264ebcb.png")' }}
      >
      </div>
    </div>
  );
};

export default Monitor;
