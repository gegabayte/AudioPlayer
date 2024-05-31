import { useState, useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { PiRowsFill } from "react-icons/pi";

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(0);

    const tracks = [
        { title: 'Track 1', src: `https://p.scdn.co/mp3-preview/f873676632570982293f1614dc9df821d4dc6e00?cid=1900bda3b7b847568f3e587c2aaa03eb` },
        { title: 'Track 2', src: `https://p.scdn.co/mp3-preview/fb40769001c14348963be8fe09522a4312636375?cid=1900bda3b7b847568f3e587c2aaa03eb` },
        { title: 'Track 3', src: `https://p.scdn.co/mp3-preview/fc696989022ceb2ec352209bd7a51b5910870ff9?cid=1900bda3b7b847568f3e587c2aaa03eb` },
    ];

    const playPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleNextTrack = () => {
        setCurrentTrack((currentTrack + 1) % tracks.length);
        setIsPlaying(false);
    };

    const handlePrevTrack = () => {
        setCurrentTrack((currentTrack - 1 + tracks.length) % tracks.length);
        setIsPlaying(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center w-96">
              
                <audio ref={audioRef} src={tracks[currentTrack].src} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={handleNextTrack} ></audio>
                <input

                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={(e) => (audioRef.current.currentTime = e.target.value)}
                    className="w-full mt-4 text-black cursor-pointer"
                />
                <div className="flex items-center justify-between mt-4">
                    <span>{formatTime(currentTime)}</span>
                    <h1 className="text-2xl font-bold mb-4">{tracks[currentTrack].title}</h1>
                    <span>{formatTime(duration)}</span>
                </div>
                <div className="flex items-center justify-between mt-8 mb-4">
                    <span onClick={handlePrevTrack} className=" text-[22px] rounded-[50%] cursor-pointer bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mx-2">
                        <FaArrowCircleLeft />
                    </span>
                    <button onClick={playPause} className=" text-black rounded mx-2">
                        {isPlaying ? <PiRowsFill className="text-[18px text-black]" /> : <FaPlay className="text-[18px text-black]" />}
                    </button>
                    <span onClick={handleNextTrack} className=" text-[22px] rounded-[50%] cursor-pointer  bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mx-2">
                        <FaArrowCircleRight />
                    </span>
                </div>


            </div>
        </div>
    );
};

export default AudioPlayer;
