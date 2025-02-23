
import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const Controls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="w-full p-6 space-y-6 md:scale-[0.55] lg:scale-[0.625] xl:scale-[0.7] transform-gpu">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold pixelated" style={{ color: '#1903bd' }}>
          AI Communist
        </h1>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold pixelated" style={{ color: '#f72191' }}>
          Detector
        </h2>
      </div>

      <div className="flex justify-center space-x-4 my-6">
        <button className="retro-button px-4 py-1 text-sm md:text-base" style={{ backgroundColor: '#1903bd', color: '#dadada' }}>
          Start
        </button>
        <button className="retro-button px-4 py-1 text-sm md:text-base" style={{ backgroundColor: '#1903bd', color: '#dadada' }}>
          Cancel
        </button>
        <button 
          className="retro-button w-8 h-8 flex items-center justify-center"
          onClick={() => setIsMuted(!isMuted)}
          style={{ backgroundColor: '#1903bd', color: '#dadada' }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <div className="progress-bar h-4 mx-auto max-w-lg">
        <div 
          className="progress-fill h-full"
          style={{ width: `${progress}%`, backgroundColor: '#1903bd' }}
        />
      </div>
    </div>
  );
};

export default Controls;
