import React, { useEffect, useState } from "react";
import useCartStore from "../store/cartStore";
import wishListFunctions from "../utils/wishListFunctions";
import Relogin from "./Relogin";

const WishListButtons = ({ productIdCom, userToWishList, removeFromWishLIst, addProductInFavourite, isReloginModelOpen }) => {
  const { cartData, setAuth } = useCartStore();
//   const { addProductInFavourite, removeFromWishLIst, isReloginModelOpen } = wishListFunctions();
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    console.log(isReloginModelOpen);
  }, [isReloginModelOpen]);
  useEffect(() => {
    setIsFavourite(
      cartData && cartData?.some(({ productId }) => productId == productIdCom),
    );
  }, [cartData]);
  return isFavourite == true ? (
    <button
      className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary  group css-iyey26 cursor-pointer flex justify-center items-center"
      tabIndex="0"
      type="button"
      onClick={() =>
        removeFromWishLIst({ productId: productIdCom, userId: userToWishList })
      }
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="text-[18px] text-[red]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path>
      </svg>
    </button>
  ) : (
    <button
      className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary  group css-iyey26 cursor-pointer flex justify-center items-center"
      tabIndex="0"
      type="button"
      onClick={() => {
        addProductInFavourite(userToWishList, productIdCom);
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="text-[18px] text-black"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
      </svg>
    </button>
  );
};

export default WishListButtons;
