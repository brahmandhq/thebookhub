"use client"
import React, { useEffect, useState } from 'react'
import PlayerContent from './PlayerContent';
import useBookStore from '@/store/book';
import useGetChapterById from '@/hooks/useGetBookById';
// import { PrismaClient, Chapter } from '@prisma/client';

const Player = () => {

  const currentBook = useBookStore()

  // const [chapter, setChapter] = useState<any | null>(null);

  console.log("the active", currentBook, currentBook.bookId, currentBook.activeId)
  const chapter = useGetChapterById(currentBook.bookId, currentBook.activeId)

 

    const currentChapter = chapter?.chapter?.data.link

    console.log("chrcking the chpter", chapter )
    

  if ( !chapter?.chapter?.data || (Object.keys(chapter?.chapter?.data).length === 0)) {
    return;
}

if(chapter.isLoading) {
  <div className='fixed z-[99] bottom-0 bg-black w-full py-2 px-4 h-[80px]'>
      Loading...
    </div>
}

  return (
    <div className='fixed z-[99] bottom-0 bg-black w-full py-2 px-4 h-[85px]'>
      <PlayerContent 
      chapter={chapter?.chapter?.data }
      key={chapter.chapter.id}
      />
    </div>
  )
}

export default Player