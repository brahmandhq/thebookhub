"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Modal from "./Modal";
import AuthModal from "./AuthModal";
import useAuthModal from "@/hooks/useAuth";
import Link from "next/link";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  search?:boolean
}

const Header: React.FC<HeaderProps> = ({ children, className, search }) => {
  const [showLogIn, setShowLogIn] = useState<boolean>(false);
  const { onClose, onOpen } = useAuthModal();

  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.user?.email) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);
  return (
    <div
      className={twMerge(
        `
        h-fit 
        bg-gradient-to-b 
        from-teal-700
        p-4
        md:p-6
        `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={search ? () => router.push("/") : () => router.back()}
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
          <button
          
            onClick={() => router.forward()}
            className={`
            ${search ? "hidden" : null}
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            `}
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => router.push("/")}
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
            onClick={() => router.push("/search")}
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
        <div className="flex items-center md:gap-4 gap-1">
          <div
            onClick={session?.user?.email ? () => signOut() : onOpen}
            className="relative inline-flex  group"
          >
            <div className=" relative transitiona-all duration-1000 opacity-70   rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              className="relative inline-flex items-center justify-center px-6 py-2 text-xs md:text-lg font-bold text-neutral-800 transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              {session?.user?.email ? "Log Out" : "Log In"}
            </a>
          </div>
          <div className="flex relative items-center md:left-3 flex-col gap-2 ">
            <Link href={"/"}>
            <img
              src={"/bookhub.jpeg"}
              alt="The Book Club Logo"
              className="object-cover w-[32px] h-[32px] md:w-[42px] md:h-[42px] border rounded-full overflow-hidden"
            /></Link>
          </div>
          <div className="flex flex-col justify-center">
          <Link href={"/"}>
            <p className="md:text-lg text-[0.6em] font-bold  font-serif">
              The Book Hub
            </p>
            </Link>
            <a href="/getdevkit.com" target="_blank">
            <p className="text-zinc-300 md:text-xs text-[0.4em] underline hover:text-white ">By getdevkit.com</p>
            </a>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
