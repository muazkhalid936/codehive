import { create } from "zustand";

const getDefaultLanguage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("lang") || localStorage.getItem("language") || "en";
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
