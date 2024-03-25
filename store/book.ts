import { create } from 'zustand'

interface BookStore {
    bookId: any,
    ids: string [],
    activeId?: string;
    setBookId: (id: string) => void;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
} 

const useBookStore = create<BookStore>((set) => ({
    ids:  [],
    activeId:undefined,
    bookId:undefined,
    setBookId: (id: string) => set({ bookId : id}),
    setId: (id: string) => set({activeId : id}),
    setIds: (ids: string[]) => set({ids : ids}),
    reset: () => set({ids: [], activeId: undefined})

}))

export default useBookStore;