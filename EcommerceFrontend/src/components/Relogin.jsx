import { useState } from 'react'
import useCustomerStore from '../store/customerStore'
import { useNavigate } from 'react-router-dom';

export default function Relogin({isReloginModelOpen, onReloginModelClosed}) {
    const authStore = useCustomerStore();
    const navigate = useNavigate();
    const handleLogOut = () => {
        authStore.setAuth({
            isCustomerLogin: false,
            token: null,
            email: null,
            id: null,
            username: null,
        })
        navigate("/login");
    }
  return (
    <div className={`${isReloginModelOpen ? "relative z-10" : "" }`}>
      <div
        transition
        className={`${isReloginModelOpen ? "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" : ""} `}
      ></div>

      <div className={`${isReloginModelOpen ? "fixed inset-0 z-10 w-screen overflow-y-auto" : "hidden" }`}>
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            transition
            className="relative transform overflow-hidden rounded-lg bg-white dark:bg-[#121212] text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  {/* <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" /> */}
                  <svg class="size-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"></path>
                </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 as="h3" className="text-[20px] font-semibold text-gray-900 dark:text-white">
                    Something went wrong
                  </h3>
                  <div className="mt-2">
                    <p className="text-[16px] text-gray-500 dark:text-[#dee5f2]">
                      Token Has Expired Need to Relogin!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleLogOut}
                className="cursor-pointer inline-flex w-full justify-center rounded-md bg-[#ff5252] px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
