
import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const Controls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="w-full p-6 space-y-8 md:space-y-10 md:scale-75 lg:scale-75 xl:scale-75 transform-gpu">
      <div className="text-left space-y-0">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/9cb0b0b6-1962-4390-92ba-bac2f5ecef23.png" 
            alt="Compass Icon"
            className="w-12 h-12"
          />
          <span className="text-4xl md:text-5xl xl:text-6xl font-bold pixelated" style={{ color: '#1903bd' }}>
            AI
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-4xl md:text-5xl xl:text-6xl font-bold pixelated tracking-wider" style={{ color: '#1903bd' }}>
            Communist
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-full h-full" style={{ fill: '#f72191' }}>
              <path d="M16 0 C18 8 24 14 32 16 C24 18 18 24 16 32 C14 24 8 18 0 16 C8 14 14 8 16 0"/>
            </svg>
          </div>
          <span className="text-4xl md:text-5xl xl:text-6xl font-bold pixelated tracking-wider" style={{ color: '#f72191' }}>
            Detector
          </span>
        </div>
      </div>

      <div className="flex justify-center space-x-4 my-8">
        <button 
          className="retro-button px-8 py-2 text-base md:text-lg bg-gray-200 border-2 border-gray-400 hover:bg-gray-300"
          style={{ 
            fontFamily: '"VT323", monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
        >
          Start
        </button>
        <button 
          className="retro-button px-8 py-2 text-base md:text-lg bg-gray-200 border-2 border-gray-400 hover:bg-gray-300"
          style={{ 
            fontFamily: '"VT323", monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
        >
          Cancel
        </button>
        <button 
          className="retro-button w-12 h-12 flex items-center justify-center bg-gray-200 border-2 border-gray-400 hover:bg-gray-300"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      <div className="progress-bar h-6 mx-auto max-w-xl border-2 border-gray-400 bg-gray-100">
        <div 
          className="progress-fill h-full bg-blue-700"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Controls;
