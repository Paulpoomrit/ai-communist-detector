
import React from 'react';

const Monitor = () => {
  return (
    <div className="relative w-full max-w-[810px] aspect-[810/720] mx-auto">
      {/* Screen content layer */}
      <div className="absolute top-[20%] left-[7%] w-[89%] h-[49%] rounded z-0" style={{ backgroundColor: '#1903bd' }}>
        {/* Placeholder for future Three.js content */}
        <div className="absolute inset-0 flex items-center justify-center text-[#dadada] pixelated text-xl">
          Screen Content Coming Soon...
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
