import ProductLoader from "./ProductLoader";
import PopularProductSlider from "../views/home/PopularProductSlider";
import { useState } from "react";

const Abc = ({popularProductsData , isPopularProductLoading}) => {
    // const [ProductSkeltonLoader , setProductSkeltonLoader] = useState("")
    let ProductSkeltonLoader = 5;
  return (
    <div className="pb-[30px] dark:bg-darkbg-highlight homeSlider">
            { isPopularProductLoading ? (
                <ProductLoader skeltonNo={ProductSkeltonLoader} classes={`grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-[20px]`} />
            ) : (
                <PopularProductSlider data={popularProductsData} />
            )
            }
        {/* </div> */}
    </div>
  );
};

export default Abc;
