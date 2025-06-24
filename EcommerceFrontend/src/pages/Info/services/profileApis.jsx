import { Service_url } from "../../../../config/app.config";

const getWishListProduct = async(token , id) => {
    try{
        const response = await fetch(`${Service_url}/favourite/get-wishlist/${id}` ,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        return response
        // return data;
    } catch(error){
            console.log(error);
            throw error;
    }
}

const handleRemoveFromFavourite = async(token , productId , userId) => {
    try{
        const response = await fetch(`${Service_url}/favourite/wishlist-removed` ,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({productId , userId})
        });
        return response
        // return data;
    } catch(error){
            console.log(error);
            throw error;
    }
}

const handleChangeUserData = async(token ,userId, formData) => {
    console.log(token ,userId, formData)
    try {
        const response = await fetch(`${Service_url}/customer/customer-edit/${userId}` ,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        return response
    } catch (error) {
        console.log(error)
    }
}


export { getWishListProduct , handleRemoveFromFavourite , handleChangeUserData}