
import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const Controls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="w-full p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold pixelated" style={{ color: '#1903bd' }}>
          AI Communist
        </h1>
        <h2 className="text-5xl font-bold pixelated" style={{ color: '#f72191' }}>
          Detector
        </h2>
      </div>

      <div className="flex justify-center space-x-6 my-8">
        <button className="retro-button px-8 py-3 text-lg" style={{ backgroundColor: '#1903bd', color: '#dadada' }}>
          Start
        </button>
        <button className="retro-button px-8 py-3 text-lg" style={{ backgroundColor: '#1903bd', color: '#dadada' }}>
          Cancel
        </button>
        <button 
          className="retro-button w-14 h-14 flex items-center justify-center"
          onClick={() => setIsMuted(!isMuted)}
          style={{ backgroundColor: '#1903bd', color: '#dadada' }}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>

      <div className="progress-bar h-8 mx-auto max-w-2xl">
        <div 
          className="progress-fill h-full"
          style={{ width: `${progress}%`, backgroundColor: '#1903bd' }}
        />
      </div>
    </div>
  );
};

export default Controls;
