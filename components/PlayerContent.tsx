"use client";


import { useEffect, useState, useRef } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

// import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

import Slider from "./Slider";
import useBookStore from "@/store/book";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { time } from "console";
// import MediaItem from "./MediaItem";
// import Slider from "./Slider";


interface PlayerContentsProps {
  id: number;
    bookId: number;
    link: string;
    title: string;
    reader: string;
    duration: string;
}

interface PlayerContentProps {
  chapter: PlayerContentsProps 
}

const PlayerContent: React.FC<PlayerContentProps> = ({ 
  chapter
}) => {
  const currentBook = useBookStore()
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [timeRemanaining, setTimeRemanaining] = useState(0);
const audioPlayer = useRef()

useEffect(() => {

},[isPlaying])
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;


  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    if (currentBook.ids.length === 0) {
      return;
    }

    const currentIndex = currentBook.ids.findIndex((id) => id === currentBook.activeId);
    const nextSong = currentBook.ids[currentIndex + 1];

    if (!nextSong) {
      return currentBook.setId(currentBook.ids[0]);
    }

    currentBook.setId(nextSong);
  }

  const onPlayPrevious = () => {
    if (currentBook.ids.length === 0) {
      return;
    }

    const currentIndex = currentBook.ids.findIndex((id) => id === currentBook.activeId);
    const previousSong = currentBook.ids[currentIndex - 1];

    if (!previousSong) {
      return currentBook.setId(currentBook.ids[currentBook.ids.length - 1]);
    }

    currentBook.setId(previousSong);
  }

  function formatTime(time: number) {
    if(time && !isNaN(time)){
        const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
        const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

        return `${minutes}:${seconds}`;
    }
    return '00:00';
}

  useEffect(() => {
    if (audioPlayer.current) audioPlayer.current.volume = volume;



    if(isPlaying){
      setInterval(() => {
          const _duration = Math.floor(audioPlayer?.current?.duration);
          const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

          setTimeRemanaining(_duration);
          setElapsed(_elapsed);
      }, 100);
  }
  }, [volume]);

  const handlePlay = () => {
   
    !isPlaying ? audioPlayer?.current?.play() : audioPlayer?.current?.pause()
    setIsPlaying(prev => !prev)

  }

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(0.5);
    } else {
      setVolume(0);
    }
  }

  return ( 
    <div className="flex flex-col justify-center mt-1  h-full">
      <audio src={chapter.link} autoPlay={isPlaying} ref={audioPlayer}/>
      <div className="grid grid-cols-2 md:grid-cols-3 pt-1">

      
        <div className="flex w-full justify-start">
          <div className="flex items-center gap-x-4 pl-4">
            {/* <MediaItem data={song} /> */}
            {chapter.title}
          </div>
        </div>

        <div 
          className="
            flex 
            md:hidden 
            col-auto 
            w-full 
            justify-end 
            items-center
          "
        >
          <div 
            onClick={handlePlay} 
            className="
              h-10
              w-10
              flex 
              items-center 
              justify-center 
              rounded-full 
              bg-white 
              p-1 
              cursor-pointer
            "
          >
            {
              isPlaying ? <BsPauseFill size={30} className="text-black" /> : <BsPlayFill size={30} className="text-black" />
            }

          </div>
        </div>

        <div 
          className="
            hidden
            h-full
            md:flex 
            justify-center 
            items-center 
            w-full 
            max-w-[722px] 
            gap-x-6
          "
        >
          <AiFillStepBackward
            onClick={onPlayPrevious}
            size={30} 
            className="
              text-neutral-400 
              cursor-pointer 
              hover:text-white 
              transition
            "
          />
          <div 
            onClick={handlePlay} 
            className="
              flex 
              items-center 
              justify-center
              h-10
              w-10 
              rounded-full 
              bg-white 
              p-1 
              cursor-pointer
            "
          >
            {
              isPlaying ? <BsPauseFill size={30} className="text-black" /> : <BsPlayFill size={30} className="text-black" />
            }
          </div>
          <AiFillStepForward
            onClick={onPlayNext}
            size={30} 
            className="
              text-neutral-400 
              cursor-pointer 
              hover:text-white 
              transition
            " 
          />
        </div>

        <div className="hidden md:flex w-full justify-end pr-2">
          <div className="flex items-center gap-x-2 w-[120px]">
            <VolumeIcon 
              onClick={toggleMute} 
              className="cursor-pointer" 
              size={34} 
            />
    
            <Slider 
              value={volume} 
              onChange={(value) => setVolume(value)}
            />
          </div>
        </div>
        </div>
        <div className="flex gap-[1vw] px-4 items-center">
          <p>{formatTime(elapsed)}</p>
          <Slider 
          
              value={elapsed/100} 
              max={timeRemanaining/100}

              // onChange={(value) => setVolume(value)}
            />
          <p>{formatTime(timeRemanaining)}</p>
        </div>    
      </div>
   );
}
 
export default PlayerContent;


