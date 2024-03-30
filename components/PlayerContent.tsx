"use client";


import { useEffect, useState, useRef } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
// import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

import Slider from "./Slider";
import useBookStore from "@/store/book";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";

import MediaItem from "./MediaItem";
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
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  // const [elapsed, setElapsed] = useState(0);
  // const [timeRemanaining, setTimeRemanaining] = useState(0);

  const progressBar = useRef<HTMLInputElement>(null);
  const audioPlayer = useRef<HTMLAudioElement>(null);
const animationRef = useRef(); 


useEffect(() => {
  const audioElement = audioPlayer.current!;
  

  

  const handleTimeUpdate = () => {
    progressBar.current.max = audioElement.duration;
      setCurrentTime(audioElement.currentTime);
  


  };


  const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
  };



  audioElement.addEventListener('timeupdate', handleTimeUpdate);
  audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

  return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
  };
}, []);


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
          const _duration = Math.floor(audioPlayer?.current?.duration!);
          const _elapsed = Math.floor(audioPlayer?.current?.currentTime!);
          progressBar.current.value = audioPlayer.current.currentTime;
          setDuration(_duration);
          setCurrentTime(_elapsed);
      }, 100);
  }

    

  }, [volume, isPlaying]);


  useEffect(() => {
    if(isPlaying){
      currentTime === duration && onPlayNext ();
    }

  },[currentTime, isPlaying])

  const handlePlay = () => {

    !isPlaying ? audioPlayer?.current?.play() : audioPlayer?.current?.pause()
    setIsPlaying(prev => !prev)
  
  }
  // const whilePlaying = () => {
  //   progressBar.current.value = audioPlayer.current.currentTime;
  //   setCurrentTime(Number(progressBar.current?.value))
  //   animationRef.current = requestAnimationFrame(whilePlaying);
  // }

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(0.5);
    } else {
      setVolume(0);
    }
  }

  const changeRange = () => {
   
      audioPlayer.current.currentTime = progressBar.current.value
      setCurrentTime(Number(progressBar.current?.value))  

  }


 

  return ( 
    <div className="flex flex-col justify-center mt-1 gap-0 h-full">
      <audio src={chapter.link} autoPlay={isPlaying} ref={audioPlayer}/>
      <div className="grid grid-cols-2 md:grid-cols-3 pt-2">

      
        <div className="flex w-full justify-start">
          <div className="flex items-center gap-x-4 pl-4">
            <MediaItem title={ chapter.title} img={currentBook.bookImg} name={currentBook.bookName} />

          </div>
        </div>


        <div 
          className="
            
            h-full
            flex 
            md:justify-center 
            justify-end 
            
            items-center 
            w-full 
            max-w-[722px] 
            md:gap-x-6
            gap-x-3

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
        <div className="flex gap-[1vw] max-w-[100%] mx-auto w-[400px] justify-center px-4 pb-2 items-center">
          <p>{formatTime(currentTime)}</p>
         
            <input ref={progressBar} defaultValue="0"  onChange={changeRange}  type="range" className="w-full h-1  rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
         
          <p>{ formatTime(duration)}</p>
        </div>    
      </div>
   );
}
 
export default PlayerContent;


