import React, { useEffect, useState } from 'react'
import { getWishListProduct, handleRemoveFromFavourite } from '../pages/Info/services/profileApis';
import { toast } from 'react-toastify';
import useCustomerStore from '../store/customerStore';

const WishList = () => {
    const [myList , setMyList] = useState([]);
    const {username , email , token , id} = useCustomerStore();
    useEffect(() => {
        getAllWishProducts();
    },[])
    const getAllWishProducts = async() => {
        const data = await getWishListProduct(token , id);
        const result = await data.json();
        // console.log(data)
        setMyList(result.data);
    }
    const removeFromFavourite = async(productId , userId) => {
        const apiResponse = await handleRemoveFromFavourite(token , productId , userId);
        switch(true){
            case apiResponse.status == 200:
                toast.success(`Product removed from Wish List`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                getAllWishProducts();
                break;
            case apiResponse.status == 403:
                toast.error(`Token has expired`, {
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
            default:
                toast.error(`Something went wrong`, {
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
    }
  return (
    <>
        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)] dark:border-[#4c4c4c]">
            <h2>My List</h2>
            <p className="mt-0 mb-0">There are <span className="font-bold text-primary">{myList?.length}</span> products in your My List</p>
        </div>
        {
            myList && myList.length > 0 && myList.map(({wishList,categoryId,categoryName,id,productBrand,productCurrentPrice,productDiscount,productInStock,productName,productOldPrice,productRating,userId,_id,createdAt,productId}) => (
                <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)] dark:border-[#4c4c4c]" key={_id}>
                    <div className="img w-[30%] sm:w-[15%] h-[138px] rounded-md overflow-hidden">
                        <a className="group" href="/product/67dbe07b6e949cc6cd65781d" data-discover="true">
                            <img src={`http://localhost:9000/product/get-product-image/${productId}/0`} />
                        </a>
                    </div>
                    <div className="info w-full md:w-[85%] relative">
                        <svg onClick={() => removeFromFavourite(productId,userId)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z">
                            </path>
                        </svg>
                        <span className="text-[13px]">{wishList.productBrand}</span>
                        <h3 className="text-[13px] sm:text-[15px]">
                            <a className="link" href="/product/67dbe07b6e949cc6cd65781d" data-discover="true">{wishList.productName}</a>
                        </h3>
                        <div className="flex items-center gap-4 mt-2 mb-2">
                            <span className="price text-[14px]  font-[600]">{wishList.productCurrentPrice}</span>
                            <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">{wishList.productOldPrice}</span>
                            <span className="price text-primary text-[14px]  font-[600]">{wishList.productDiscount} OFF</span>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default WishList
