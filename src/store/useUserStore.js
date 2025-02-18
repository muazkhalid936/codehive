// store.js
import {create} from 'zustand';

const useStore = create(set => ({
  language: 'English', // Default language is English
  setLanguage: (lang) => set({ language: lang })
}));

export default useStore;
