"use client"
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const MoreGenreButton = () => {
    const router = useRouter()
  return (
     
    <button
    onClick={() => router.push("/genres")}
     
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
     <p className=" flex gap-2 items-center font-medium text-xl truncate p-5">

     <FaPlus size={24}/>
     More Genres... 
    </p>

         </button>
  )
}

export default MoreGenreButton