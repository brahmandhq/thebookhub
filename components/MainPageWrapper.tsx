"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const MainPageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.4 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0}} 
    transition={{ duration: 0.4 }}
    className={twMerge(`bg-neutral-900 
    rounded-lg 
    h-full 
    w-full
    overflow-hidden 
    overflow-y-auto`,
        className
      )}
  >
    {children}
  </motion.div>
);