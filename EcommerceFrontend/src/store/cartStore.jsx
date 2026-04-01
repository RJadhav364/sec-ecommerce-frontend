import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartData: null,
      wishListData: null,
      setAuth: (newState) => {
        set((state) => newState)
    },
    }),
    {
      name: "cart-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
