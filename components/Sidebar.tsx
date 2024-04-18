"use client"
import React, { useMemo } from 'react'
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
interface Sidebarprops {
    children: React.ReactNode;
}
const Sidebar: React.FC<Sidebarprops> = ({
    children
}) => {

  const pathname = usePathname();
  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      icon: BiSearch,
      label: 'Search',
      href: '/search',
      active: pathname === '/search'
    },
  ], [pathname]);

  return (
    <div className='flex h-full max-h-screen pr-2'>
      <div className='hidden 
      fixed left-0 top-0
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 

          md:w-[380px] 
       
          p-2'>

   
      <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full" >
          <Library />
        </Box>
        </div>
        <main className="h-full flex-1 py-2 fixed top-0 md:left-[380px] right-0 bottom-0 pl-2 md:pl-0 pr-2">
        {children}
      </main>
    </div>
  )
}

export default Sidebar