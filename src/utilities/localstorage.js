const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString)  {return JSON.parse(storedCartString) } 
    return [];
}


const saveCardToLS = (id) => {
    const cartStringified = JSON.stringify(id);
    localStorage.setItem('cart',cartStringified);
}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    saveCardToLS(cart);
}

const removeFromLS = (id) => {
    const cart = getStoredCart();
    const remaining = cart.filter(item => item !== id);
    saveCardToLS(remaining);
}

const removeAllFromLS = () => {
    localStorage.removeItem('cart');
}

export { addToLS,getStoredCart,removeFromLS,removeAllFromLS }