
import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const Controls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 space-y-8 md:space-y-10 md:scale-75 lg:scale-75 xl:scale-75 transform-gpu">
      <div className="text-right space-y-0">
        <div className="flex items-center justify-end gap-2">
          <img 
            src="/lovable-uploads/03391eef-536c-4737-aa1e-aa0e59710d78.png" 
            alt="Pixelated Compass"
            className="w-12 h-12 pixelated"
          />
          <span className="text-5xl md:text-6xl xl:text-7xl font-bold pixelated text-black">
            AI
          </span>
        </div>
        <div className="flex items-center justify-end">
          <span className="text-5xl md:text-6xl xl:text-7xl font-bold pixelated tracking-wider text-black">
            Communist
          </span>
        </div>
        <div className="flex items-center justify-end gap-2">
          <img 
            src="/lovable-uploads/e97e5f3f-3582-43ae-ab85-26f85f9b1371.png"
            alt="Pixelated Star"
            className="w-8 h-8 pixelated"
          />
          <span className="text-5xl md:text-6xl xl:text-7xl font-bold pixelated tracking-wider text-black">
            Detector
          </span>
        </div>
      </div>

      <div className="flex justify-center space-x-4 my-8">
        <button 
          className="retro-button px-8 py-2 text-base md:text-lg bg-gray-200 border-2 border-gray-400 hover:bg-gray-300"
        >
          Start
        </button>
        <button 
          className="retro-button px-8 py-2 text-base md:text-lg bg-gray-200 border-2 border-gray-400 hover:bg-gray-300"
        >
          Result
        </button>
        <button 
          className="retro-button w-12 h-12 flex items-center justify-center bg-gray-200 border-2 border-gray-400 hover:bg-gray-300"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      <div className="w-[75%] max-w-xl px-4">
        <Progress value={progress} className="windows-xp-progress" />
      </div>
    </div>
  );
};

export default Controls;
