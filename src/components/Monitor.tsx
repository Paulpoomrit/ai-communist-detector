
import React from 'react';

const Monitor = () => {
  return (
    <div className="relative w-[810px] h-[720px] mx-auto">
      {/* Screen content layer */}
      <div className="absolute top-[10%] left-[14%] w-[71%] h-[65%] rounded z-0" style={{ backgroundColor: '#1903bd' }}>
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
