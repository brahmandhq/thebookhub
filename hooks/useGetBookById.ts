import { getBookById } from "@/lib/books";
import { getChapterById } from "@/lib/books";
import { useEffect, useMemo, useState } from "react"
import { PrismaClient, Chapter } from '@prisma/client';


const useGetChapterById = (bookId: any, id?:any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [chapter, setChapter] = useState<any>(null);

    useEffect(() => {
        if(!id){
            return;
        }


        const fetchChapter = async () => {
            setIsLoading(true);
          
            const chapter = await getChapterById(bookId, id);
           

            setChapter(chapter!)
            setIsLoading(false)
        }

        fetchChapter();
       


    },[id])

    return useMemo(() =>({
        isLoading,
        chapter
    }),[isLoading, chapter] )
}

export default useGetChapterById;