"use client"
import { useRouter } from "next/navigation";
import React from 'react'
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge'
import {motion} from "framer-motion"
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
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y:0 , transition: {delay: 0.4}}}
    exit={{ opacity: 0, y: 20}} 
      className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-blue-900
        
        `,
        className
      )}>

<motion.div 
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y:0 , transition: {delay: 0.3}}}
exit={{ opacity: 0, y: 20}} 
className="w-full p-6 mb-4 flex items-center justify-between">
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
        </motion.div>
        {children}
      </motion.div>
  )
}

export default HeaderPlaylist
