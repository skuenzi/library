import { create } from "zustand";

const store = (set) => ({
  collections: [
     { key: 1, title: "Paranormal", desc: "Paranormal reads", books: [] },
  ],
  addCollection: (key, title, desc, books) =>
    set((store) => ({
      collections: [...store.collections, { key, title, desc, books }],
    })),
  addBookToCollection: (collectionKey) => console.log(collectionKey)
});

export const useCollectionsStore = create(store);
