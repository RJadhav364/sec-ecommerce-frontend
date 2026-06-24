import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getProduct, getWishListDetails, productInWishList, removeProductFromFavourite } from './services/ProductRelatedApis';
import ProductRating from '../../components/ProductRating';
import {Link} from "react-router-dom"
import useCustomerStore from '../../store/customerStore';
import { toast } from 'react-toastify';
import ConfirmationBox from '../../components/ConfirmationBox';
import Relogin from '../../components/Relogin';
import useCartStore from '../../store/cartStore';
import useCategoryStore from '../../store/categoryStore';
import NineProductGrid from '../../svg/NineProductGrid';
import CustomIcon from '../../components/CustomIcon';
import ForthProductGrid from '../../svg/ForthProductGrid';
import SingleProductGrid from '../../svg/SingleProductGrid';
import productGridArray from '../../utils/ProductGridArray';
import Button from '../../components/Button';
import ProductLoader from '../../components/ProductLoader';
import wishListFunctions from '../../utils/wishListFunctions';
import WishListButtons from '../../components/WishListButtons';
import AddToCartButton from '../../components/AddToCartButton';

const ProductsList = () => {
    const {token, id: userId, isCustomerLogin} = useCustomerStore();
    // const {cartData , setAuth} = useCartStore();
    const { isReloginModelOpen, setIsReloginModelOpen, removeFromWishLIst, addProductInFavourite} = wishListFunctions();
    // const [isReloginModelOpen, setIsReloginModelOpen] = useState(false);
    const [layoutProduct, setLayoutProduct] = useState({
        setActiveLayout: 0,
        layoutCount: ""
    })
    const paramMap = {
        catId: 'categoryId',
        subCatId: 'subCategoryId',
        thirdLevelcategoryId: 'thirdLevelcategoryId',
    };
    const [searchParams] = useSearchParams();
    // console.log(searchParams.keys())
    
    const [resultedKey, setResultedKey] = useState({keyFilter: "", filterIds: []})
    const [confirmationBoxOpen, setConfirmationBoxOpen] = useState(false);
    const category_data = useCategoryStore();
    let filterValue = null;
    const [products,setProducts] = useState({
        isProductsLoading: true,
        productData: []
    });
    useEffect(() => {
        // for(const [key, value] of Object.entries(paramMap)){
        // const Id = searchParams.get(key);
        //     if(Id){
        //         filterKey = value;
        //         filterValue = Id;
        //         console.log(value)
        //         setResultedKey({keyFilter: value, filterIds: Id})
        //         // setResultedKey({filterIds: Id})
        //     }
        // }
        searchParams.forEach((value, key) => {
            setResultedKey({keyFilter: key, filterIds: [value]})
            // filterKey = true;
            getData(key == "catId" ? "categoryId" :  key == "subCatId" ? "subCategoryId" : "thirdLevelcategoryId",value)
        });
    } , [searchParams])
    // let filterKey = false;
    const getData = async(key,value) => {
        // console.log("api call start", key,value)
        setProducts({isProductsLoading: true , productData: []})
        try {
            const response = await getProduct(key,value);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setProducts({productData: json.data , isProductsLoading: false})
        } catch (error) {
            console.error(error.message);
        }
    }
    // useEffect(()=>{
    //     getData();
    // },[resultedKey])
    // useEffect(()=>{
    //     console.log(resultedKey);
    // },[resultedKey])
    // useEffect(() => {
    //     // if(filterKey == "categoryId"){
    //     //     console.log("typeof",typeof resultedKey)
    //         console.log(layoutProduct);
    //     //     setResultedKey(filterValue)
    //     // }
    // },[layoutProduct])
    const handleCheckboxChecked = (checkedId) => {
        // console.log(checkedId)
        setResultedKey((prevSelected) => {
            const isSelected = prevSelected.filterIds.includes(checkedId);
            
            const updatedFilterIds = isSelected
            ? prevSelected.filterIds.filter((id) => id !== checkedId)
            : [...prevSelected.filterIds, checkedId];

            // Optionally update keyFilter too
            const updatedKeyFilter = "categoryId"; // or some other logic

            // Call the function with updated values
            getData(updatedKeyFilter, updatedFilterIds );

            // Update the state
            return {
            ...prevSelected,
            filterIds: updatedFilterIds,
            keyFilter: updatedKeyFilter,
            };
        });
        // setResultedKey((prevSelected) => console.log(prevSelected));
        // setResultedKey({keyFilter: "categoryId", filterIds: checkedId})
        // getData(checkedId)
    }
    // onclick event that change the product grid layout
    const changeProductgridLayout = (keyID) => {
        // console.log(layoutProduct.current.setActiveLayout)
        // layoutProduct.current.classList.add("bg-[#c1c1c1]")
        setLayoutProduct({setActiveLayout : keyID})
    //    layoutProduct.current.setActiveLayout = layoutProduct.current.setActiveLayout + keyID;
    }
  return (
    <>
        <div className='dark:bg-darkbg-highlight py-[30px] font-display-Montserrat'>
            <div className="mx-auto w-[1400px] flex gap-[10px]">
                <div className='dark:text-text-color w-[20%] h-max sticky top-[200px]'>
                    {/* category list start */}
                    <h3 className='w-full mb-[5px] text-[16px] font-[600] flex items-center pr-5 font-display-Montserrat'>Product Categories</h3>
                    <div className='scrollProperties'>
                        {
                            category_data && category_data?.data?.passedData.length > 0 && category_data?.data?.passedData.map(({id,categoryName}) => (
                                // console.log(navbarDetails),
                                <div key={id} className='flex items-center p-[5px_10px]'>
                                     <input type="checkbox" name={id} id={id} className='mr-2 w-[20px] h-[20px] border-gray-300 rounded focus:ring-indigo-500 hover:cursor-pointer' onChange={() => handleCheckboxChecked(id)} checked={resultedKey?.filterIds?.includes(id)} /> 
                                    <label htmlFor={id} className='text-sm text-gray-700 hover:cursor-pointer w-full dark:text-text-color text-[13px]'>
                                        {categoryName}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                    {/* category list end */}
                </div>
                {/* products listing start */}
                    <div className='dark:text-text-color w-[80%] font-display-Montserrat'>
                        {/* listing bar start */}
                        <div className='bg-[#f1f1f1] p-[5px_30px] w-full mb-4 rounded-md flex items-center justify-between'>
                            {/* product count */}
                            <div className='text-black'>{products.productData?.length} products</div>
                            {/* if user want to change product view */}
                            <div className='flex gap-[15px]'>
                                {
                                    productGridArray?.map((result, index) => (
                                        <CustomIcon key={index} id={index} handleIconActive={() => changeProductgridLayout(index)} classes={`p-[10px] rounded-[50%] cursor-pointer ${layoutProduct.setActiveLayout == index ? "bg-[#c1c1c1]" : ""}`} insideContent={result} />
                                    ))
                                }
                            </div>
                        </div>
                        {/* listing bar end */}
                        {
                            products.isProductsLoading ? (
                                <ProductLoader skeltonNo={`${layoutProduct.setActiveLayout == 0 ? 4 : layoutProduct.setActiveLayout == 1 ? 3 : 4}`} classes={`grid ${layoutProduct.setActiveLayout == 0 ? "grid-cols-4" : layoutProduct.setActiveLayout == 1 ? "grid-cols-3" : "grid-cols-1"} gap-[20px]`}  />
                            ) : (
                                <div className={`grid ${layoutProduct.setActiveLayout == 0 ? " grid-cols-4" : layoutProduct.setActiveLayout == 1 ? " grid-cols-3" : " grid-cols-1"} gap-[10px]`}>
                                {products && products?.productData?.map(({ id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId , description }) => (
                                    <div
                                    key={id}
                                    className={`shadow-lg rounded-md overflow-hidden border border-[#efe1e1] dark:border-[#959090] w-full flex-shrink-0 ${layoutProduct.setActiveLayout == 2 && "flex p-[1rem] flex-wrap gap-[15px]"}`}
                                    >
                                        {/* <Link to={`/products/${id}`}> */}
                                            <div className={`group imgWrapper w-[100%]  overflow-hidden  rounded-md rounded-bl-none rounded-br-none relative z-0 ${layoutProduct.setActiveLayout == 2 && "w-[300px] h-[300px]"}`}>
                                                {/* <a data-discover="true"> */}
                                                <div className={`img ${layoutProduct.setActiveLayout == 1 ? "h-[300px]" : layoutProduct.setActiveLayout == 2 ? "h-full" : "h-[200px]"} overflow-hidden`}>
                                                    <Link to={`/products/${id}`}>
                                                        <img src={`http://localhost:9000/product/get-product-image/${id}/0`} />
                                                        <img src={`http://localhost:9000/product/get-product-image/${id}/1`} className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"></img>
                                                    </Link>
        
                                                </div>
                                                {/* </a> */}
                                                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500] bg-[#ff5252]">{productDiscount}%</span>
                                                <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                                                <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary css-iyey26 flex justify-center items-center" tabIndex="0" type="button">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[18px] !text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"></path>
                                                    </svg>
                                                </button>
                                                <WishListButtons productIdCom={id} userToWishList={userId} removeFromWishLIst={removeFromWishLIst} addProductInFavourite={addProductInFavourite} isReloginModelOpen={isReloginModelOpen} passedToken={token} />
                                                </div>
                                            </div>
                                            <div className={`info p-3 py-5 relative pb-[50px] ${layoutProduct.setActiveLayout == 2 ? "h-full w-[70%]" : "h-[190px]"}`}>
                                                <h6 className={`${layoutProduct.setActiveLayout == 2 ? "text-[20px]" : "text-[13px]"} !font-[400]`}>
                                                    <span className="link transition-all dark:text-text-color">{productBrand}</span>
                                                </h6>
                                                <h3 className={`${layoutProduct.setActiveLayout == 2 ? "text-[16px]" : "text-[12px]"} title mt-1 font-[500] mb-1 text-[#000]`}>
                                                    <a
                                                    className={`link transition-all dark:text-text-color whitespace-nowrap ${layoutProduct.setActiveLayout == 2 ? "w-full" : "w-[240px]"} overflow-hidden text-ellipsis inline-block`}
                                                    data-discover="true"
                                                    >
                                                    {productName}
                                                    </a>
                                                </h3>
                                                <p className={`${layoutProduct.setActiveLayout == 2 ? "block text-[15px]" : "hidden"}`}>
                                                    {description}
                                                </p>
                                                <span
                                                    className="MuiRating-root MuiRating-sizeSmall Mui-readOnly MuiRating-readOnly css-lsmt2w flex"
                                                    role="img"
                                                    aria-label="5 Stars"
                                                >
                                                    {/* shows product rating code start */}
                                                    <ProductRating stars={productRating} />
                                                    {/* shows product rating code end */}
                                                </span>
                                                <div className="flex items-center gap-4 justify-between">
                                                    <span className="oldPrice line-through text-gray-500 text-[12px] lg:text-[14px] font-[500]">
                                                        ₹{productOldPrice}.00
                                                    </span>
                                                    <span className="price text-primary text-[12px] lg:text-[14px]  font-[600] dark:text-text-color">
                                                    ₹{productCurrentPrice}.00
                                                    </span>
                                                </div>
                                                <div className="!absolute bottom-[15px] left-0 pl-3 pr-3 w-full">
                                                    <AddToCartButton id={id} userId={userId} token={token} productInStock={productInStock}  />
                                                    {/* <Button btnLabel="Add to Cart" classes={`flex ${layoutProduct.setActiveLayout == 2 ? "auto p-[7px_20px]" : "w-full"} btn-sm gap-2 css-uiq2rh dark:text-text-color border border-[#ff5252] hover:text-white hover:shadow-[inset_300px_0_0_0_#ff5252] justify-center items-center py-[5px] transition duration-[.4s] ease-in-out cursor-pointer rounded-[5px]`} insideELements={<svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 24 24"
                                                        className="text-[18px]"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                        <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                                    </svg>} /> */}
                                                    {/* <button
                                                    className={`flex ${layoutProduct.setActiveLayout == 2 ? "auto p-[7px_20px]" : "w-full"} btn-sm gap-2 css-uiq2rh dark:text-text-color border border-[#ff5252] hover:text-white hover:shadow-[inset_300px_0_0_0_#ff5252] justify-center items-center py-[5px] transition duration-[.4s] ease-in-out cursor-pointer rounded-[5px]`}
                                                    tabIndex="0"
                                                    type="button"
                                                    >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 24 24"
                                                        className="text-[18px]"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                        <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                                    </svg>{" "}
                                                    Add to Cart
                                                    </button> */}
                                                </div>
                                            </div>
                                        {/* </Link> */}
                                    </div>  
                                ))}
                                </div>

                            )
                        }
                    </div>
                {/* products listing end */}
            </div>
        </div>
        {/* <ConfirmationBox setConfirmationBoxOpen={setConfirmationBoxOpen} confirmationBoxOpen={confirmationBoxOpen} handleConfirmButtonFn={addProductInFavourite} confirmationHeading="Something went wrong" confirmationContent="Token has expired need to relogin" /> */}
        <Relogin 
            isReloginModelOpen={isReloginModelOpen}
            onReloginModelClosed={() => setIsReloginModelOpen(false)}
        />
    </>
  )
}

export default ProductsList
