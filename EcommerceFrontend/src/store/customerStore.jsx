import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCustomerStore = create(persist((set) => ({
      isCustomerLogin: false,
      token: null,
      email: null,
      id: null,
      username: null,
      customeProfilePic: null,
      setAuth: (newState) => set((state) => newState),
    }),
    {
      name: "Authentication-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCustomerStore;
