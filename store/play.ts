import { create} from "zustand";

interface playerProps {
    isPlaying: boolean;
    setIsPlaying: () => void;
}
const usePlayValue = create<playerProps>((set) => ({
    isPlaying: false,
    setIsPlaying: () => set((state) =>( {isPlaying: !state.isPlaying}))
}))

export default usePlayValue;