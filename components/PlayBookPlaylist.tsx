"use client"
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
          bg-amber-700
          p-4 
          drop-shadow-md 
        "
      >
        <FaPlay className="text-black" />
      </button>
  )
}

export default React.memo(PlayBookPlaylist)