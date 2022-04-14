import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
