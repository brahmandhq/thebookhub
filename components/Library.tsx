import React from 'react'
import { GiBookshelf } from "react-icons/gi";
import BookItem from './BookItem';
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
    <div className="flex flex-col">
    <div className="flex items-center justify-between px-5 pt-4">
      <div className="inline-flex items-center gap-x-5">
        <GiBookshelf  className="text-zinc-400" size={26} />
        <p className="text-zinc-400 font-semibold text-lg">
          Your Library
        </p>
      </div>
    
    </div>
    <div className="flex flex-col gap-y-2 mt-4 px-3">
      {books.map((item, index) => (
        <BookItem
        //   onClick={(id: string) => onPlay(id)} 
          key={index} 
          data={item}
        />
      ))}
    </div>
  </div>
  )
}

export default Library