/* eslint-disable no-useless-catch */
import { Service_url } from "../../../../config/app.config";

const getParticularProduct = async(id) => {
    try{
        const response = await fetch(`http://localhost:9000/product/get-single-product/${id}`);
        return response
        // return data;
    } catch(error){
            // console.log(error);
            throw error;
    }
}

const createProductReview = async(reviewSubmitedObject,token) => {
    try{
        const response = await fetch(`${Service_url}/review/new-product-review`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(reviewSubmitedObject)
        });
        return response
        // return data;
    } catch(error){
            console.log(error);
            throw error;
    }
}

export {getParticularProduct,createProductReview}