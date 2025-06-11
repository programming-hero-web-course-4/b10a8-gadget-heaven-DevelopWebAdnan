const getStoredCart = () => {
    // cart
    const storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    }
    else {
        return [];
    }
}

const addToStoredCart = (id) => {
    const storedCart = getStoredCart();
    if (storedCart.includes(id)) {
        // already exists. Do not add it
        console.log(id, 'already exists in the cart')
    }
    else {
        storedCart.push(id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart', storedCartStr);
    }
}

const getStoredWishList = () => {
    // wish-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)) {
        // already exists. Do not add it
        console.log(id, 'already exists in the wish list');
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

export { addToStoredCart, addToStoredWishList }