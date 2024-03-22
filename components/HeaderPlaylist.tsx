"use client"
import { useRouter } from "next/navigation";
import React from 'react'
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge'

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
  }
  

const HeaderPlaylist : React.FC<HeaderProps> = ({
    children,
    className,
  }) => {
    const router = useRouter();
  return (
    <div
      className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-red-900
        
        `,
        className
      )}>

<div className="w-full p-6 mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button 
            onClick={() => router.back()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
         
          </div>
          <div className="flex md:hidden gap-x-2 items-center">
          <button 
            onClick={() => router.push('/')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button 
            onClick={() => router.push('/search')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        </div>
        {children}
      </div>
  )
}

export default HeaderPlaylist
