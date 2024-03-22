import React from 'react'
import { FaPlay } from 'react-icons/fa'
const PlayBookPlaylist = () => {
  return (
    <button 
        className="
          transition  
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-green-500 
          p-4 
          drop-shadow-md 
          
          hover:scale-110
        "
      >
        <FaPlay className="text-black" />
      </button>
  )
}

export default PlayBookPlaylist