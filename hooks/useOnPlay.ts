import React from 'react'
import { PrismaClient, Chapter } from '@prisma/client';
import useBookStore from '@/store/book';
const useOnPlay = () => {

  const bookStore = useBookStore();

 
  const onPlay = (id: any, chapters, bookId) => {
    console.log("target", id, bookId)
    bookStore.setBookId(bookId)
    bookStore.setId(id)
    bookStore.setIds(chapters.map((chapter) => chapter.id) as any)
  }

  return onPlay;
   


 
}

export default useOnPlay