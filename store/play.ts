import { create} from "zustand";

interface playerProps {
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    toggleIsPlaying: () => void;
}
const usePlayValue = create<playerProps>((set) => ({
    isPlaying: false,
    setIsPlaying: (value: boolean) => set({ isPlaying: value }),
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
}))

export default usePlayValue;