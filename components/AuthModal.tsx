"use client";
import React from "react";
import Modal from "./Modal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import useAuthModal from "@/hooks/useAuth";
const AuthModal = () => {
  const router = useRouter();

  const { onClose, isOpen } = useAuthModal();

  const handleSignIn = () => {
    signIn("google");
  };

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title={"The Book Hub"}
      description={"Login to your Account to explore 1000s of free audiobook 🎧"}
    >
      <button
        onClick={handleSignIn}
        className="w-full justify-center gap-4 md:gap-6 lg:gap-8 hover:bg-neutral-700 duration-100 transition-all rounded-full py-3 md:py-4 px-6 flex  items-center text-md  lg:text-xl font-bold"
        style={{ border: "1px solid #ffffff" }}
      >
        <FcGoogle size={28} />
        <p>Sign in with Google</p>
      </button>
    </Modal>
  );
};

export default AuthModal;
