"use client"
import { Key, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../Loader";
import { getBooks, getBooksForClient } from "@/lib/books";
import Books from "../Books";
import PageContent from "@/app/(site)/components/pageContent";

const LoadMoreBooks = () => {
    const [books, setBooks] = useState<any>([])
    const [page, setPage] = useState(0);
    const [allLoaded, setAllLoaded] = useState(false);

    const { ref, inView } = useInView();

    const loadMorePages = async () => {
        try {
            let newPage = page + 1
       
            const newBooks =  await getBooksForClient({page:newPage, limit: 24})
            console.log(newBooks)
         
            if(newBooks.data.length < 24) setAllLoaded(true)
            setBooks((prev: any) => [...prev, ...newBooks.data])
            setPage((prev) => prev+1)
            
        } catch (error) {
            console.log(error)
           
            
        }

    }



    useEffect(() => {
        if(inView){
            loadMorePages()
        }

    },[inView])
    if ( allLoaded) {
        return (
          <div className="mt-2 mb-8 text-neutral-400 text-center">
            No More books available. 
          </div>
        )
      }
  return (
    <>
    <div className="mb-7 px-6">
       <PageContent books={books}/>
    </div>
  
    <div className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3" 
    ref={ref}
    >
      <div className="        mb-[13vh]">
     <Loader />     
      </div>
      
    </div></>
  )
}

export default LoadMoreBooks