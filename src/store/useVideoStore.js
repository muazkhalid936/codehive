import { create } from "zustand";


const useVideoStore = create((set) => ({
  isVideoLoading: true, // Initially loading
  setIsVideoLoading: (loading) => set({ isVideoLoading: loading }),
}));

export default useVideoStore;
