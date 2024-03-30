import { create } from 'zustand'

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

const useBookStore = create<BookStore>((set) => ({
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
    reset: () => set({ids: [], activeId: undefined})

}))

export default useBookStore;