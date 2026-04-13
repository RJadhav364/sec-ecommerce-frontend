export const cartProductQuantityCount = ({cartDetails}) => {
    console.log("cartDetails in util", cartDetails)
    const total = cartDetails?.reduce((sum, { productQuantity }) => {
        return sum + productQuantity;
    }, 0);
    console.log("total in util", total)
}