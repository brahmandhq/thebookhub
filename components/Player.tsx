"use client"
import React, { useEffect, useState } from 'react'
import PlayerContent from './PlayerContent';
import useBookStore from '@/store/book';
import useGetChapterById from '@/hooks/useGetBookById';
import { useSession } from 'next-auth/react';
// import { PrismaClient, Chapter } from '@prisma/client';

const Player = () => {
  const {data, status} = useSession();
 

  const currentBook = useBookStore()

  // const [chapter, setChapter] = useState<any | null>(null);

  const chapter = useGetChapterById(currentBook.bookId, currentBook.activeId)

  if ( !chapter?.chapter?.data || (Object.keys(chapter?.chapter?.data).length === 0) || !data?.user?.email) {
    return;
}


if(chapter.isLoading) {
  <div className='fixed z-[99] bottom-0 bg-black w-full py-2 px-4 h-[78px]'>
      Loading...
    </div>
}

  return (
    <div className='fixed z-[99] bottom-0 bg-black w-full py-4 pb-7 px-4 h-[100px]'>
      <PlayerContent 
      chapter={chapter?.chapter?.data }
      key={chapter.chapter.id}
      />
    </div>
  )
}

export default Player