"use client"
import React, { useEffect } from "react";
import PlayButton from "./PlayButton";
import PlayBookPlaylist from "./PlayBookPlaylist";
import useOnPlay from "@/hooks/useOnPlay";
import { useSession } from "next-auth/react";
import useAuthModal from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { resolve } from "path";
import { rejects } from "assert";
import { motion } from "framer-motion";

const PlaylistMain = ({data, name, img, idN} : {data:any, name:string, img:string, idN:any}) => {
  const {data : session} = useSession()
  const {onClose, onOpen} = useAuthModal()
  const router = useRouter();


  // useEffect(() => {
  //   if(session?.user?.email){
  //     router.refresh();
  //     onClose();
  //   }
  // },[session, router, onClose])

  const onPlay = useOnPlay();
  const handleLogInFirst = () => {

    return new Promise((resolve, reject) => {
      onOpen();
    });
  };

  const handleClick = async (id: any) => {
    let idToPass = id ? id : data[0].id

    if (!session?.user?.email) {
     handleLogInFirst().then(() => onPlay(idToPass, data, idN, img, name)).catch(error => console.error("Login error:", error));
      
    }else{
      onPlay(idToPass, data, idN, img, name);
    }


   
  };

  return (
    <div
    
    
    className=" bg-zinc-900/30 mt-6 flex-1 p-6 blur-100">
      <div className="flex relative gap-1 items-center" onClick={() =>handleClick(data[0].id)}>
        <PlayBookPlaylist />
      </div>
      <div className="px-6 pt-4">
        <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/30">
            <thead className="">
                <tr className="text-gray-300">
                <th className="font-normal px-4 py-2 whitespace-nowrap">#</th>
                <th className="font-normal px-4 py-2 whitespace-nowrap">Chapter Name</th>
             
                <th className="font-normal px-4 py-2 whitespace-nowrap text-right"><svg viewBox="0 0 32 32" className="inline-block h-5 w-5" astro-icon="carbon:time"><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z"></path><path fill="currentColor" d="M20.59 22 15 16.41V7h2v8.58l5 5.01L20.59 22z"></path></svg></th>
            </tr>
            </thead>
            <tbody>
                {data.map((chapter: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; reader: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; duration: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; },index: any) => (
                    
              
            <tr onClick={() => handleClick(chapter.id)} key={chapter.id} className="group hover:bg-gray-500/20 cursor-pointer">
                
                <td className="whitespace-nowrap px-4 py-2">{index + 1}</td>
                <td className="whitespace-nowrap px-4 py-2 flex gap-3 items-center">
                    <div className="h-10 w-10">
                        <img src={img ? img : "/images/book1.jpg"} alt="The Nights" className="rounded object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" />
                            </div>
                            <div className="leading-none">
                                <a href="#" className="text-gray-300 group-hover:text-white hover:underline text-sm">{chapter.title}</a>
                                < div className="text-sm text-gray-300 group-hover:text-white"><a href="#" className="hover:underline">{chapter.reader}</a>
                                    <span className="text-gray-300"> </span></div></div></td>
                                        <td className="whitespace-nowrap px-4 py-2 text-right">{chapter.duration}</td>
                                        
                                        
                                        </tr>
                                        ) )}
            </tbody>
        </table>

      </div>
    </div>
  );
};

export default React.memo(PlaylistMain);
