"use client";

import Image from "next/image";
import usePlayer from "@/hooks/usePlayer";
import useBookStore from "@/store/book";

interface MediaItemProps {
  img?: string;
  name?: string
  title?: string;

}

const MediaItem: React.FC<MediaItemProps> = ({
  img,
  name,
  title
}) => {
  const player = useBookStore();

//   const handleClick = () => {
//     if (onClick) {
//       return onClick(data.id);
//     }
  
//     return player.setId(data.id);
//   };

  return ( 
    <div
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        w-full 
      
        rounded-md
      "
    >
      <div 
        className="
          relative 
          rounded-md 
          max-h-[32px] 
          max-w-[32px] 
          overflow-hidden
        "
      >
        <img
        
          src={img}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{name}</p>
        <p className="text-neutral-400 text-sm truncate">
          {title}
        </p>
      </div>
    </div>
  );
}
 
export default MediaItem;