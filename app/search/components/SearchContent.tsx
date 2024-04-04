"use client";

import { GiDuration } from "react-icons/gi";
import { useRouter } from "next/navigation";
interface SearchContentProps {
  books: any;
}

const SearchContent: React.FC<SearchContentProps> = ({
  books
}) => {


const router = useRouter()

const handleClick = (id: any) => {
  router.push(`/${id}`)
}


  if (books?.length === 0 || !books) {
    return (
      <div 
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full 
          px-6 
          text-neutral-400
        "
      >
        No Books Found.
      </div>
    )
  }

  return ( 
    <div className="flex flex-col gap-y-2 w-full px-6">
      {books.map((book: any) => (
        <div 
          key={book.id} 
          className="
          flex 
          items-center
          gap-x-5 
          cursor-pointer 
          hover:bg-zinc-800/50 
          w-full 
          p-4 
          rounded-md
          shadow-lg 
          hover:shadow-xl 
          outline-none 

        "
        onClick={() => handleClick(book.id)}
        > <div 
        className="
          relative 
          flex
          justify-between
          rounded-md 
          h-[52px] 
          
          w-full
        "
      >
      
         
        <div className="flex flex-col gap-y-1 ">
        <p className="text-white  text-xl font-bold">{book.name}</p>
        <p className="text-zinc-400 text-md  font-medium">
          By {book.author.firstName + " " + book.author.lastName }
        </p>
      </div>
      <div className="flex flex-col gap-y-1 items-end ">
        <p className="text-white  text-sm font-light"> language: {book.language}</p>
        <p className="text-zinc-400 text-md flex gap-2 items-center  font-medium">
        <GiDuration/>  : { book.duration}
        </p>
      </div>
     
        </div>
        </div>
      ))}
     
    </div>
  );
}
 
export default SearchContent;