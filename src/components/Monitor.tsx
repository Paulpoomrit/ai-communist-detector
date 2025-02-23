
import React from 'react';

const Monitor = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Screen content layer */}
      <div className="absolute top-[12%] left-[7%] w-[86%] h-[65%] bg-screen-dark rounded z-0">
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
