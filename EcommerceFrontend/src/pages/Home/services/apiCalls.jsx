const homeSliderImages = async() => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await fetch(`http://localhost:9000/slider/get-slider-image`);
        return response
        // return data;
        } catch(error){
            // console.log(error);
            throw error;
        }
}

const popularProducts = async() => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await fetch(`http://localhost:9000/product/get-all-products`);
        return response
        // return data;
        } catch(error){
            // console.log(error);
            throw error;
        }
}

export {homeSliderImages,popularProducts}