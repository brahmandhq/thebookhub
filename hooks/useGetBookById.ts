import { getBookById } from "@/lib/books";
import { getChapterById } from "@/lib/books";
import { useEffect, useMemo, useState } from "react"
import { PrismaClient, Chapter } from '@prisma/client';


const useGetChapterById = (bookId: any, id?:any) => {
    console.log("Hook called with ID:", id);
    const [isLoading, setIsLoading] = useState(false);
    const [chapter, setChapter] = useState<Chapter | null>(null);

    useEffect(() => {
        if(!id){
            return;
        }

console.log("stfu")

        const fetchChapter = async () => {
            setIsLoading(true);
            console.log("if it is returning" ,id)
            const chapter = await getChapterById(bookId, id);
            console.log("if it is returning" ,chapter)

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