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

export { addToStoredCart }