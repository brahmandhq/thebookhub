"use client"
import Books from "@/components/Books";
import LoadMoreBooks from "@/components/InfiniteScroll/LoadMoreBooks";
import useOnPlay from "@/hooks/useOnPlay";
import { motion } from "framer-motion";
import { Key } from "react";


const PageContent: React.FC<any> = ({
  books
}) => {



  // if (books.length === 0) {
  //   return (
  //     <div className="mt-4 text-neutral-400">
  //       No books available.
  //     </div>
  //   )
  // }

  return ( 
    <div 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-4 
        gap-4
        mt-4
      "
    >
      {books.map((item: {
        chapters: any; id: Key | null | undefined; 
}) => (
        <Books
      
          key={item.id} 
          data={item}
        />
      ))}
    </div>
  );
}
 
export default PageContent;