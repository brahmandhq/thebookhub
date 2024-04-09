"use client";

import Books from "@/components/Books";
import useOnPlay from "@/hooks/useOnPlay";
import { motion } from "framer-motion";
import { Key } from "react";

// import { Song } from "@/types";
// import useOnPlay from "@/hooks/useOnPlay";
// import SongItem from "@/components/SongItem";


const PageContent: React.FC<any> = ({
  books
}) => {



  if (books.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        No books available.
      </div>
    )
  }

  return ( 
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y:0 }}
    exit={{ opacity: 0, y: 20}} 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-4 
        2xl:grid-cols-5 
        gap-4
        mt-4
        mb-[10vh]
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
    </motion.div>
  );
}
 
export default PageContent;