import { create } from "zustand";

const getDefaultLanguage = () => {
  return localStorage.getItem("language") || "en";
};

const useStore = create((set) => ({
  language: getDefaultLanguage(),
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
