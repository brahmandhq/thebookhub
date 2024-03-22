"use client";

import Books from "@/components/Books";
import { Key } from "react";

// import { Song } from "@/types";
// import useOnPlay from "@/hooks/useOnPlay";
// import SongItem from "@/components/SongItem";


const PageContent: React.FC<any> = ({
  books
}) => {
//   const onPlay = useOnPlay(books);

  if (books.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        No books available.
      </div>
    )
  }

  return ( 
    <div 
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
      {books.map((item: { id: Key | null | undefined; }) => (
        <Books
     
          key={item.id} 
          data={item}
        />
      ))}
    </div>
  );
}
 
export default PageContent;