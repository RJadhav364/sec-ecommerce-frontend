const cartProductQuantityCount = (cartDetails) => {
    const total = cartDetails?.reduce((sum, { productQuantity }) => {
        return sum + productQuantity;
    }, 0);
    return total;
}

export { cartProductQuantityCount };