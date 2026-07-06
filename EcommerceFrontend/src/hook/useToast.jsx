import { useEffect } from "react";
import { toast, Bounce } from "react-toastify";

const getToastOptions = () => ({
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
  transition: Bounce,
});

const useToast = () => {
  const toastSuccess = (message) => {
    toast.success(message, getToastOptions());
  };

  const toastError = (message) => {
    toast.error(message, getToastOptions());
  };

  const toastInfo = (message) => {
    toast.info(message, getToastOptions());
  };

  return { toastSuccess, toastError, toastInfo };
};

export default useToast;
