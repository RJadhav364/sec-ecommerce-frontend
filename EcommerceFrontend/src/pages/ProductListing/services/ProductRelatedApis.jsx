import { Service_url } from "../../../../config/app.config";

const getProduct = async(id) => {
    try{
        const response = await fetch(`${Service_url}/product/get-all-products/${id}`);
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

export {getProduct , productInWishList}