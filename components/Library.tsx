import React from 'react'
import { GiBookshelf } from "react-icons/gi";
import BookItem from './BookItem';
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';
const Library = () => {

    const books = [
        {
            title: "Priti",
            author: "some author"
        },{
            title: "Priti",
            author: "some author"

        }, {
            title: "Priti",
            author: "some author"
        }
    ]
  return (
    <div className='flex flex-col justify-between h-full'>
    <div className="flex flex-col">
    <div className="flex items-center justify-between px-5 pt-4">
      <div className="inline-flex items-center gap-x-5">
        <GiBookshelf  className="text-zinc-400" size={26} />
        <p className="text-zinc-400 font-semibold text-lg truncate">
          Your Library - <span className='text-zinc-100'>Coming Soon</span> 
        </p>
      </div>
    
    </div>
    <div className="flex flex-col gap-y-2 mt-4 px-3">
      {/* {books.map((item, index) => (
        <BookItem
        //   onClick={(id: string) => onPlay(id)} 
          key={index} 
          data={item}
        />
      ))} */}
    </div>
  </div>
  <div className='flex items-center justify-between px-5 pt-4 mb-[3vh]'>
  
  <p className='text-zinc-400 font-semibold text-md'>Powered by <a href="https://librivox.org/" target='_blank' className='underline hover:text-zinc-400/50'>LibriVox</a> </p>
  <div className='flex gap-2 items-center'>
  <a href="https://twitter.com/_thebookhub" target='_blank'><BsTwitterX  size={22}/></a>
  <a href="https://www.youtube.com/@thebookhub137" target='_blank'><FaYoutube size={24}/></a>

  </div>

  </div>
  </div>
  )
}

export default Library