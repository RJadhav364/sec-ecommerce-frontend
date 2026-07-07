import React, { useState } from "react";
import {
  getWishListDetails,
  productInWishList,
  removeProductFromFavourite,
} from "../pages/ProductListing/services/ProductRelatedApis";
import { toast } from "react-toastify";
import useCustomerStore from "../store/customerStore";
import useCartStore from "../store/cartStore";

const wishListFunctions = () => {
  const { token, id: userId, isCustomerLogin } = useCustomerStore();
  const { cartData, setAuth } = useCartStore();
  const [isReloginModelOpen, setIsReloginModelOpen] = useState(false);
  const addProductInFavourite = async (
    passedUserId,
    passedProductId,
    passedToken,
  ) => {
    switch (true) {
      case isCustomerLogin == true:
        const response = await productInWishList(
          passedUserId,
          passedProductId,
          passedToken,
        );
        switch (true) {
          case response.status == 200:
            toast.success(`Product Added to Wishlist \u{1F600}`, {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "colored",
            });
            const getResponse = await getWishListDetails(token, userId);
            const updatedCart = await getResponse.json();
            setAuth({ wishListData: updatedCart.data });
            break;
          case response.status == 409:
            toast.error(`Product already in Wishlist`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            break;
          case response.status == 403:
            setIsReloginModelOpen(true);
            break;
        }
        break;
      default:
        toast.error(`You are not login, please login first`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        break;
    }
  };
  const removeFromWishLIst = async (productId, userId) => {
    try {
      const result = await removeProductFromFavourite(token, productId, userId);
      console.log(result);
      // const convertedResult = await result.json();
      switch (true) {
        case result.status == 200:
          toast.success(`Product Removed from Wishlist`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          const getResponse = await getWishListDetails(token, productId.userId);
          const updatedCart = await getResponse.json();
          setAuth({ wishListData: updatedCart.data });
          break;
        default:
          alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { addProductInFavourite, isReloginModelOpen, setIsReloginModelOpen, removeFromWishLIst };
};

export default wishListFunctions;
