import { create } from "zustand";



const useStore = create((set) => ({
  language: "en",
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },


  isModelLoading: true,
  setIsModelLoading: (isLoading) => {
    console.log("Setting isModelLoading to:", isLoading); // Debugging
    set({ isModelLoading: isLoading });
  },
}));

export default useStore;
