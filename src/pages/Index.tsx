
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Monitor from '@/components/Monitor';
import Controls from '@/components/Controls';

const Index = () => {
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        const left = `${Math.random() * 100}%`;
        const animationDelay = `${Math.random() * 3}s`;
        flakes.push(
          <div
            key={i}
            className="snow"
            style={{
              left,
              animationDelay,
              top: `-${Math.random() * 10}vh`
            }}
          />
        );
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();
    const interval = setInterval(createSnowflakes, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="snow-container">
        {snowflakes}
      </div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto p-4">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center max-w-[1920px] mx-auto translate-x-[5%]">
            <div className="h-full flex items-center justify-end scale-140 md:translate-y-[5%] md:translate-x-[10%] md:scale-125 lg:scale-[1.425] xl:scale-[1.475] transform-gpu">
              <Monitor />
            </div>
            <div className="h-full flex items-center md:translate-x-[10%] transform-gpu">
              <Controls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
