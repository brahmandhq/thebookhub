import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
interface BookStore {
    bookId: any,
    bookName?: string,
    bookImg?: string,
    ids: string [],
    activeId?: string;
    setBookId: (id: string) => void;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
    setbookImg: (img: string) => void;
    setbookName: (name: string) => void;
} 

const useBookStore = create<BookStore, [["zustand/persist", unknown]]>(persist((set) => ({
    ids:  [],
    activeId:undefined,
    bookId:undefined,
    bookName: undefined,
    bookImg: undefined,
    setbookName: (name: string) => set({ bookName : name}),
    setbookImg: (img: string) => set({ bookImg: img}),
    setBookId: (id: string) => set({ bookId : id}),
    setId: (id: string) => set({activeId : id}),
    setIds: (ids: string[]) => set({ids : ids}),
    reset: () =>{ 
        set({ids: [], activeId: undefined})
        localStorage.removeItem('book-store'); 
    }

}),
{
  name: 'book-storage', // name of the item in the storage (must be unique)
  storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
},
),

)

export default useBookStore;