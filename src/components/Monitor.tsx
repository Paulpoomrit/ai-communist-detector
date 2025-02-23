
import React from 'react';

const Monitor = () => {
  return (
    <div className="relative max-w-[800px] mx-auto aspect-[4/3] h-auto">
      {/* Screen content layer */}
      <div className="absolute top-[10%] left-[11%] w-[78%] h-[65%] bg-screen-dark rounded z-0">
        {/* Placeholder for future Three.js content */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 pixelated">
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
