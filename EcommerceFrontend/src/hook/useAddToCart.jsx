import React, { useState } from "react";
import {
    getAllCartProducts,
    getWishListDetails,
    productAddInCart,
    productInWishList,
    removeProductFromFavourite,
} from "../pages/ProductListing/services/ProductRelatedApis";
import { toast } from "react-toastify";
import useCustomerStore from "../store/customerStore";
import useCartStore from "../store/cartStore";
import { cartProductQuantityCount } from "../utils/CartProductTotalCount.jsx";

const useAddToCart = () => {
    const { token, id: userId, isCustomerLogin } = useCustomerStore();
    const { cartData, setAuth } = useCartStore();
    const [isReloginModelOpen, setIsReloginModelOpen] = useState(false);
    // const storeCartData = useCartStore();
    const addProductInCart = async (id, providedUserId, passedToken) => {
        try {
            const getResponse = await productAddInCart(id, providedUserId, passedToken);
            const result = await getResponse.json();
            switch (true) {
                case getResponse.status == 200:
                    const getCartProductsRes = await getAllCartProducts(passedToken, providedUserId);
                    const result = await getCartProductsRes.json();
                    const total = cartProductQuantityCount(result.data);
                    setAuth({
                        cartData: result.data,
                        toalCartCountN: total
                    });
                    // setCartCount(result.data.length);
                    break;
                case getResponse.status == 403:
                    // setIsReloginModelOpen(true);
                    // handleChild1Data(true);
                    break;
                default:
                    setAuth({
                        cartData: [],
                    });
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }
    const removeFromWishLIst = async (productId, userId) => {
        try {
            const result = await removeProductFromFavourite(token, productId, userId);
            const convertedResult = await result.json();
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
    return { addProductInCart, isReloginModelOpen, setIsReloginModelOpen, removeFromWishLIst };
}

export default useAddToCart
