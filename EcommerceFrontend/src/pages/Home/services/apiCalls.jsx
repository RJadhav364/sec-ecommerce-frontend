import { Service_url } from "../../../../config/app.config"

const homeSliderImages = async() => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await fetch(`${Service_url}/slider/get-slider-image`);
        return response
        // return data;
        } catch(error){
            // console.log(error);
            throw error;
        }
}

const getPopularProduct = async(homePopularSection) => {
       // eslint-disable-next-line no-useless-catch
    try{
        const response = await fetch(`${Service_url}/product/get-all-products`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicates the body content type
            },
            body: JSON.stringify(homePopularSection)
        });
        return response
        // return data;
    } catch(error){
            // console.log(error);
            throw error;
    }
}

export {homeSliderImages,getPopularProduct}