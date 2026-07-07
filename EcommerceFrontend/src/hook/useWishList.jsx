import { useMemo } from "react";

const useWishlist = (wishListData, productId) => {
  const isFavourite = useMemo(() => {
    return (
      wishListData?.some(
        (item) => item.productId === productId
      ) || false
    );
  }, [wishListData, productId]);

  return isFavourite;
};

export default useWishlist;