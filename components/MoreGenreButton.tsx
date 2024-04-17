"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
type GenreProps = {
  leftIcon?: boolean;
  title: string;
  route: string;
  rightIcon?: boolean;
  bookCount?: number;
};

const MoreGenreButton = ({
  leftIcon,
  title,
  route,
  rightIcon,
  bookCount,
}: GenreProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(route)}
      className={`
    ${rightIcon ? "justify-between" : "justify-start"} 
      relative 
      group 
      flex 
      items-center 
      rounded-md 
      overflow-hidden 
      gap-x-4 
      bg-neutral-100/10 
      cursor-pointer 
      hover:bg-neutral-100/20 
      transition 
      pr-4
      p-5
    `}
    >
      {" "}
      {leftIcon && <FaPlus size={24} />}
      <div
        className={` flex flex-col gap-x-2 gap-y-1 items-start justify-center truncate`}
      >
        <p className="font-medium text-xl"> {title}</p>
        {bookCount && (
          <p className="font-extralight text-xs text-gray-200">
            Book Count:{" "}
            <span className="font-normal text-gray-400">{bookCount}</span>
          </p>
        )}
      </div>
      <div> {rightIcon && <GrNext size={24} />}</div>
    </button>
  );
};

export default MoreGenreButton;
