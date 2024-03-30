"use client";

import Image from "next/image";
import PlayButton from "./PlayButton";
import Tag from "./Tag";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// import useLoadImage from "@/hooks/useLoadImage";
// import { Song } from "@/types";

// import PlayButton from "./PlayButton";

interface SongItemProps {
  data: any;
  // onClick: (id: string) => void;
}

const Books: React.FC<any> = ({
  data,

}) => {
const router = useRouter()



const handleClick = () => {

  router.push(`/${data.id}`)


}

  return ( 
    <div
      onClick={ handleClick} 
      className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-5
      "
    >
      <div 
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <motion.img
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0 , transition: {delay: 0.4}}}
        exit={{opacity:0, x:20}}
          className="object-cover"
          src={ data.imageLink ? data.imageLink :  '/images/book1.jpg'}
         
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full text-xl">
          {data.name}
        </p>
        <p 
          className="
            text-neutral-400 
            text-md 
            pb-4 
            w-full 
            truncate
          "
        >
          By { data.author.firstName && data.author.firstName ? (data.author.firstName + " " +  data.author.lastName) : data.author.firstName ? data.author.firstName : data.author.lastName ? data.author.lastName : "Anon"}
        </p>
        <Tag title={data.language}/>
      </div>
      <div 
        className="
          absolute 
          bottom-28 
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
   );
}
 
export default Books;