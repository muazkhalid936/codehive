// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  language: "en",
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },

}));

export default useStore;
