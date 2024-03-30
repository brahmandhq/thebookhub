import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';
interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
  }
const Modal : React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
  }) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay 
          className="
            bg-neutral-900/90 
            backdrop-blur-sm 
            fixed 
            inset-0
          " 
        />
        <Dialog.Content
          className="
            fixed 
            drop-shadow-md 
            border 
            border-neutral-700 
            top-[50%] 
            left-[50%] 
            max-h-full 
            h-[50vh]
            md:h-auto 
            md:max-h-[85vh] 
            w-[80vw]
            md:w-[90vw] 
            md:max-w-[450px] 
            translate-x-[-50%] 
            translate-y-[-50%] 
            rounded-md 
            bg-neutral-800 
            md:py-[48px] 
            md:px-[62px]
            flex
            flex-col
            items-center
            justify-center
            p-4
            focus:outline-none
          ">
          <Dialog.Title 
            className="
              text-2xl 
              text-center 
              font-bold 
              mb-6
            "
          >
            {title}
          </Dialog.Title>
          <Dialog.Description 
            className="
              mb-8 
              text-md 
              leading-normal 
              text-center
            "
          >
            {description}
          </Dialog.Description>
          <div>
            {children}
          </div>
          <Dialog.Close asChild>
            <button
              className="
                text-neutral-400 
                hover:text-white 
                absolute 
                top-[10px] 
                right-[10px] 
                inline-flex 
                h-[25px] 
                w-[25px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
                focus:outline-none
              "
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal