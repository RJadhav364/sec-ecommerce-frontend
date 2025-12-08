import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCustomerStore = create(
  persist(
    (set) => ({
      isCustomerLogin: false,
      setAuth: (newState) => set((state) => newState),
      customerLogout: () => {
        set({
          isCustomerLogin: false,
        });
      },
    }),
    {
      name: "Authentication-state",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        if (state.isCustomerLogin) {
          return {
            isCustomerLogin: state.isCustomerLogin,
            token: state.token,
            email: state.email,
            id: state.id,
            username: state.username,
            customeProfilePic: state.customeProfilePic,
          };
        }
        return {isCustomerLogin : false};
      },
    }
  )
);

export default useCustomerStore;
