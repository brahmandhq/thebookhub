import React from 'react'
import { PrismaClient, Chapter } from '@prisma/client';
import useBookStore from '@/store/book';
const useOnPlay = () => {

  const bookStore = useBookStore();

 
  const onPlay = (id: any, chapters: any[], bookId: string, img: string, name: string) => {

    bookStore.setBookId(bookId)
    bookStore.setId(id)
    bookStore.setIds(chapters.map((chapter) => chapter.id) as any)
    bookStore.setbookImg(img)
    bookStore.setbookName(name)
  }

  return onPlay;
   


 
}

export default useOnPlay