import { Service_url } from "../../../../config/app.config";
 /* eslint-disable */
// get all products list by category id
const getProduct = async(filterkey, filtervalue) => {
    try{
        // let sendObj = {
        //     [filterkey] : filtervalue
        // }
        const response = await fetch(`${Service_url}/product/get-all-products`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicates the body content type
            },
            body: JSON.stringify({[filterkey] : filtervalue})
        });
        return response
        // return data;
    } catch(error){
            // console.log(error);
            throw error;
    }
}

const productInWishList = async(userId,id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId,token) => {
    try {
        const response = await fetch(`${Service_url}/favourite/add-wishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({userId,id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId})
        });
        return response
    } catch (error) {
        // console.log(error);
        throw error
    }
}

const getWishListDetails = async(token,userId) => {
    try {
        const apiResponse = await fetch(`${Service_url}/favourite/get-wishlist/${userId}` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return apiResponse
    } catch (error) {
        throw error
    }
}

const removeProductFromFavourite = async(token, productId, userId) => {
    try {
        const apiResponse = await fetch(`${Service_url}/favourite/wishlist-removed` , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(productId,userId)
        })
        return apiResponse;
    } catch (error) {
        console.log(error)
    }
}

export {getProduct , productInWishList , getWishListDetails, removeProductFromFavourite}