import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { fetchCategories } from "../utils/fetchCategory";

const useCategorysStore = create(
  persist(
    (set, get) => ({
        options: [],
      fetched: false,
      setOptions: (options) => set({ options }),
      getOptions: async () => {
        if (!get().fetched) {
          try {
            const data = await fetchCategories(); // API call
            set({ options: data, fetched: true });
          } catch (err) {
            console.error('Failed to fetch options:', err);
          }
        }
      },
    }),
    {
      name: "Authentication-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCategorysStore;
