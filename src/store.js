import { create } from "zustand"

const store = (set) => ({
    collections: [{key: 1, title: 'Paranormal', desc: 'PAranormal reads', books: []}],
    addCollection: (key, title, desc, books) => set((store) => ({collections: [...store.collections, {key, title, desc, books}]}))
})


export const useCollectionsStore = create(store)