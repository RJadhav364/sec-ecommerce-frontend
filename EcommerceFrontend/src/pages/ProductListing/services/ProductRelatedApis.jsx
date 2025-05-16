const getProduct = async(id) => {
    try{
        const response = await fetch(`http://localhost:9000/product/get-all-products/id`);
        return response
        // return data;
    } catch(error){
            // console.log(error);
            throw error;
    }
}

export {getProduct}