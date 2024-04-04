"use client"
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
type GenreProps = {
  leftIcon? : boolean,
  title: string,
  route: string,
  rightIcon? : boolean
}

const MoreGenreButton = ({leftIcon , title, route, rightIcon}: GenreProps) => {
    const router = useRouter()
  return (
     
    <button
    onClick={() => router.push(route)}
     
    className="
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
    "
  >
     <p className={` ${rightIcon ? "justify-between" : "justify-start"} flex gap-2 items-center font-medium text-xl truncate p-5`}>

    {leftIcon &&  <FaPlus size={24}/>}
     {title}

    </p>

         </button>
  )
}

export default MoreGenreButton