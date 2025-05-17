import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCategoryStore = create(
  persist(
    (set) => ({
      isLoading: true,
      data: null,
      setAuth: (newState) => set((state) => newState),
    }),
    {
      name: "category-data",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCategoryStore;
