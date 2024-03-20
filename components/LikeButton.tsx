"use client";

import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface LikeButtonProps {
  songId: string;
};

const LikeButton = (
  songId : string
) => {
 



  const handleLike = async () => {
  

  return (
    <button 
      className="
        cursor-pointer 
        hover:opacity-75 
        transition
      "
      onClick={handleLike}
    >
      <AiFillHeart color={ '#22c55e'} size={25} />
    </button>
  );
}
}
export default LikeButton