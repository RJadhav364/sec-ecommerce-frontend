import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createProductReview,
  getParticularProduct,
  getParticularProductReview,
} from "./services/SingleProductRelatedApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ProductRating from "../../components/ProductRating";
import useCustomerStore from "../../store/customerStore";
import { Bounce, toast } from "react-toastify";
import Button from "../../components/Button";
import convertData from "../../utils/DateFormat";
import useToast from "../../hook/useToast";


const SingleProduct = () => {
  const { id } = useParams();
  const { id: userId, token } = useCustomerStore();
  const [data, setData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activestars, setActiveStars] = useState(0);
  const {toastError} = useToast();
  const loggedInUserReview = useRef({
    reviewDescription: "",
    submittedStars: 1,
  });
  // console.log(id)
  useEffect(() => {
    getSingleProductData(id);
    // getSingleProductReviewById(id);
  }, [id]);
  const getSingleProductData = async (id) => {
    try {
      const getResponse = await getParticularProduct(id);
      const result = await getResponse.json();
      // console.log(result)
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSingleProductReviewById = async (productId) => {
    try {
      const getResponse = await getParticularProductReview(productId);
      const result = await getResponse.json();
      setData((prevData => ({
        ...prevData,
        getProductReview: result.productData
      })));
      // setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitReview = async () => {
    let reviewSubmitedObject = {
      description: loggedInUserReview.current.reviewDescription,
      stars: loggedInUserReview.current.submittedStars,
      productId: id,
      userId: userId,
    };
    try {
      const getResponse = await createProductReview(
        reviewSubmitedObject,
        token,
      );
      switch (true) {
        case getResponse.status == 200:
          getSingleProductReviewById(reviewSubmitedObject.productId);
          toast.success(`Review Submitted Successfully`, {
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
        case getResponse.status == 403:
          throw Error("You are not authorized to submit review");
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
      }
    } catch (error) {
      // console.log(error.message);
      toastError(error.message);
    }
  };
  const tabs = [
    {
      id: "tab1",
      label: "Description",
    },
    {
      id: "tab2",
      label: "Reviews",
    },
  ];

  const tabContent = {
    tab1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    tab2: (
      <div className="shadow-none lg:shadow-md w-full sm:w-[80%] py-0  lg:py-5 px-0 lg:px-8 rounded-md dark:shadow-amber-50">
        <div className="w-full productReviewsContainer">
          <h2 className="text-[16px] lg:text-[18px]">Customer Review's</h2>
          <div className="reviewScroll w-full max-h-[300px] overflow-x-hidden mt-5 pr-5">
            {data &&
              data?.getProductReview?.map(
                ({
                  _id,
                  createdAt,
                  description,
                  userId,
                  reviewerName,
                  profilePic,
                }) => (
                  <div
                    key={_id}
                    className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] dark:border-b dark:border-[rgba(255,255,255,0.1)] w-full flex items-center justify-between"
                  >
                    <div className="info w-[80%] flex items-center gap-3">
                      <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                          src={profilePic}
                          alt="user profile image"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">{reviewerName}</h4>
                        <h5 className="text-[13px] mb-0">{convertData(createdAt)}</h5>
                        <p className="mt-0 mb-0 text-[13px]">{description}</p>
                      </div>
                    </div>
                    <div className="">
                      <span
                        className="MuiRating-root MuiRating-sizeSmall Mui-readOnly MuiRating-readOnly css-lsmt2w"
                        role="img"
                        aria-label="1 Star"
                      >
                        <span>
                          <span className="MuiRating-icon MuiRating-iconFilled css-e8k0ez">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05h"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarIcon"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                          </span>
                        </span>
                        <span>
                          <span className="MuiRating-icon MuiRating-iconEmpty css-1gen6it">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05h"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarBorderIcon"
                            >
                              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                            </svg>
                          </span>
                        </span>
                        <span>
                          <span className="MuiRating-icon MuiRating-iconEmpty css-1gen6it">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05h"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarBorderIcon"
                            >
                              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                            </svg>
                          </span>
                        </span>
                        <span>
                          <span className="MuiRating-icon MuiRating-iconEmpty css-1gen6it">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05h"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarBorderIcon"
                            >
                              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                            </svg>
                          </span>
                        </span>
                        <span>
                          <span className="MuiRating-icon MuiRating-iconEmpty css-1gen6it">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05h"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarBorderIcon"
                            >
                              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                ),
              )}
          </div>
          <div className="reviewForm dark:bg-[#2e2d2d] bg-[#FAFAFA] p-4 rounded-md">
            <h2 className="text-[18px]">Add a review</h2>
            <div className="w-full mt-5">
              <div>
                <textarea
                  name=""
                  id=""
                  rows="5"
                  className="w-full bg-white resize-none placeholder:text-black p-5 text-black rounded-md outline-none"
                  placeholder="Write a review..."
                  onChange={(e) => {
                    loggedInUserReview.current.reviewDescription = e.target.value
                  }}
                ></textarea>
                <br />
                <br />
                <div className="flex gap-[5px]">
                  {Array.from({ length: 5 }, (elem, index) => {
                    return (
                      <span key={index}>
                        <label htmlFor={index}>
                          <svg
                            className={`MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05h w-[20px] h-[20px] cursor-pointer ${activestars == index || activestars > index ? "fill-[#FABA25]" : "fill-[#ffffff]"}`}
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="StarIcon"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                          </svg>
                        </label>
                        <input
                          className="MuiRating-visuallyHidden border-0 h-[1px] -m-[1px] overflow-hidden p-0 absolute whitespace-nowrap w-[1px]"
                          id={index}
                          type="radio"
                          name="size-small"
                          value={index}
                          wfd-id="id7"
                          onChange={(e) => {
                            (setActiveStars(index),
                              (loggedInUserReview.current.submittedStars =
                                Number(e.target.value) + 1));
                          }}
                        ></input>
                      </span>
                    );
                  })}
                </div>
                <div className="div flex items-center mt-5">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary btn-org addToCartBtn btn-border flex btn-sm gap-2 css-uiq2rh dark:text-text-color border border-[#ff5252] hover:text-white hover:shadow-[inset_300px_0_0_0_#ff5252] justify-center items-center py-[5px] transition duration-[.4s] ease-in-out cursor-pointer rounded-[5px] w-[210px] bg-[#ff5252] uppercase font-bold"
                    onClick={() => handleSubmitReview()}
                  >
                    {" "}
                    submit review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  const { isCustomerLogin } = useCustomerStore();
  // console.log(isCustomerLogin)
  const handleProductInWishLIst = (ationToPerform) => {
    switch (true) {
      case isCustomerLogin == false:
        toast.error("You are not login, login first", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        break;
      case ationToPerform == "addProductInCart":
        console.log("product added in cart");
        break;
      default:
        console.log("product removed from wishlist");
        break;
    }
  };
  return (
    <section className="py-5 dark:bg-darkbg-highlight">
      <div className="div w-[1400px] grid grid-cols-2 mx-auto items-center">
        <div className="flex gap-3">
          <div className="w-[15%]">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              // loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiperSingleProduct"
              style={{ height: "400px" }}
            >
              {data &&
                data.images &&
                data.images.map((image, index) => (
                  // console.log(image)
                  <SwiperSlide key={index}>
                    <div className="h-full overflow-hidden rounded-md">
                      <img src={image} />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="w-[85%]">
            {/* <img src="" alt="" /> */}
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                width: "512px",
                height: "500px",
              }}
              loop={true}
              spaceBetween={10}
              // navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
              // direction='vertical'
            >
              {data &&
                data.images &&
                data.images.map((image, index) => (
                  // console.log(image)
                  <SwiperSlide key={index}>
                    <div className="h-full rounded-md w-full">
                      <img src={image} className="w-full" />
                    </div>
                  </SwiperSlide>
                ))}
              {/* <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
        <div className="w-full pr-2 pl-2 lg:pr-10 lg:pl-10 dark:text-white">
          <h1 className="text-[18px] sm:text-[22px] font-[600] mb-2 font-display-Montserrat">
            {data.productName}
          </h1>
          <div className="flex gap-3">
            <span className="productBrand text-gray-400 text-[13px]">
              Brand:{" "}
              <span className="font-[500] text-black dark:text-text-color opacity-75">
                {data.productBrand}
              </span>
            </span>
            <span className="productRating flex flex-row">
              <ProductRating stars={data.productRating} />
            </span>
          </div>
          <div className="pt-[16px] flex items-center gap-3">
            <div className="flex gap-3">
              <div className="oldPrice line-through text-gray-500 dark:text-[#c9cbcf] text-[20px] font-[500]">
                &#8377;{data.productOldPrice}
              </div>
              <div className="price text-[#ff5252] text-[20px] font-[600]">
                &#8377;{data.productCurrentPrice}
              </div>
            </div>
            <div className="text-[14px]">Available IN Stock</div>
          </div>
          <div className="mt-3 pr-10 mb-5">
            <p className="font-display-Montserrat text-sm">
              {data.description}
            </p>
          </div>
          <div className="flex items-center gap-4 py-4">
            {/* <div className="qtyBoxWrapper w-[90px] relative">
              <input
                type="number"
                name=""
                id=""
                className="w-full p-[6px] pl-5 text-[15px] focus:outline-none  border border-[rgba(0,0,0,0.2)] dark:border-white rounded-md no-spinner"
              />
              <button
                className="css-iyey26 absolute right-0 top-0 p-[5px]"
                tabIndex="0"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-[12px] opacity-55 dark:fill-white fill-black"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"></path>
                </svg>
                <span className="MuiTouchRipple-root css-4mb1j7"></span>
              </button>
              <button
                className="css-iyey26 absolute right-0 bottom-0 p-[5px]"
                tabIndex="0"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-[12px] opacity-55"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="MuiTouchRipple-root css-4mb1j7"></span>
              </button>
            </div> */}
            <Button
              btnLabel="Add to Cart"
              classes="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary btn-org addToCartBtn btn-border flex btn-sm gap-2 css-uiq2rh dark:text-text-color border border-[#ff5252] hover:text-white hover:shadow-[inset_300px_0_0_0_#ff5252] justify-center items-center py-[5px] transition duration-[.4s] ease-in-out cursor-pointer rounded-[5px] w-[210px]"
              onClick={() => handleProductInWishLIst("addProductInCart")}
              insideELements={
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
                </svg>
              }
            />
            {/* <button
            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary btn-org addToCartBtn btn-border flex btn-sm gap-2 css-uiq2rh dark:text-text-color border border-[#ff5252] hover:text-white hover:shadow-[inset_300px_0_0_0_#ff5252] justify-center items-center py-[5px] transition duration-[.4s] ease-in-out cursor-pointer rounded-[5px] w-[210px]"
            tabIndex="0"
            type="button"
            onClick={productAddToCart}
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
            <Button
              onClick={() => handleProductInWishLIst("removeFromIWishList")}
              btnLabel="Add to Wishlist"
              classes="addToWishList flex items-center gap-2 text-[14px] sm:text-[15px] link cursor-pointer font-[400]"
              insideELements={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                </svg>
              }
            />
            {/* <button className="addToWishList flex items-center gap-2 text-[14px] sm:text-[15px] link cursor-pointer font-[400]">
                <svg stroke="currentColor" fill='currentColor' strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg>
                  Add to Wishlist
            </button> */}
          </div>
        </div>
        {/* description and review section start */}
      </div>
      <div className="pt-10 w-[1400px] mx-auto">
        <div className="flex gap-12 mb-5">
          {/* <span className='link text-[17px] cursor-pointer font-[500] font-display-Montserrat text-text-ff5252'>Description</span>
            <span className='dark:text-white font-display-Montserrat'>Review</span> */}
          {tabs &&
            tabs.map(({ id, label }) => (
              <span
                key={id}
                className="link text-[17px] cursor-pointer font-[500] font-display-Montserrat text-text-ff5252"
                onClick={() => {
                  setActiveTab(id);
                }}
              >
                {label}
              </span>
            ))}
        </div>
        <div className="shadow-[0_1px_3px_#0000001f,0_1px_2px_#0000003d] w-full py-5 px-8 rounded-md text-[14px] dark:text-white font-display-Montserrat dark:shadow-[0_1px_3px_#fffefe1f,0_1px_15px_#ffffff3d]">
          {tabContent[activeTab]}
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac */}
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
