
import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const Controls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold pixelated" style={{ color: '#1903bd' }}>
          AI Communist
        </h1>
        <h2 className="text-4xl font-bold pixelated" style={{ color: '#f72191' }}>
          Detector
        </h2>
      </div>

      <div className="flex justify-center space-x-4">
        <button className="retro-button" style={{ backgroundColor: '#1903bd', color: '#dadada' }}>
          Start
        </button>
        <button className="retro-button" style={{ backgroundColor: '#1903bd', color: '#dadada' }}>
          Cancel
        </button>
        <button 
          className="retro-button w-12 flex items-center justify-center"
          onClick={() => setIsMuted(!isMuted)}
          style={{ backgroundColor: '#1903bd', color: '#dadada' }}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%`, backgroundColor: '#1903bd' }}
        />
      </div>
    </div>
  );
};

export default Controls;
