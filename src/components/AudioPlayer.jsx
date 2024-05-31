import { useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Audio Player</h1>
        <audio ref={audioRef}>
          <source src="https://p.scdn.co/mp3-preview/f873676632570982293f1614dc9df821d4dc6e00?cid=1900bda3b7b847568f3e587c2aaa03eb" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="mt-4">
          <button 
            onClick={playAudio} 
            className="px-4 py-2 bg-blue-600 text-white rounded mr-2 hover:bg-blue-700"
          >
            Play
          </button>
          <button 
            onClick={pauseAudio} 
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
