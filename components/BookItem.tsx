"use client";

import Image from "next/image";

// import useLoadImage from "@/hooks/useLoadImage";
// import { Song } from "@/types";
// import usePlayer from "@/hooks/usePlayer";

interface BookItemProps {
  data: any;
//   onClick?: (id: string) => void;
}

const BookItem: React.FC<BookItemProps> = ({
  data,
//   onClick,
}) => {
//   const player = usePlayer();
//   const imageUrl = useLoadImage(data);

//   const handleClick = () => {
//     if (onClick) {
//       return onClick(data.id);
//     }
  
//     return player.setId(data.id);
//   };

  return ( 
    <div
    //   onClick={handleClick}
      className="
        flex 
        items-center 
        gap-x-5 
        cursor-pointer 
        hover:bg-zinc-800/50 
        w-full 
        p-2 
        rounded-md
        overflow-hidden
        shadow-lg 
        hover:shadow-xl 
        outline-none 
      "
    >
      <div 
        className="
          relative 
          rounded-md 
          h-[52px] 
          w-[52px] 
        "
      >
        <img
       
          src={data.img || "https://via.placeholder.com/150"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate text-xl font-bold">{data.title}</p>
        <p className="text-zinc-400 text-md truncate font-medium">
          By {data.author}
        </p>
      </div>
    </div>
  );
}
 
export default BookItem;