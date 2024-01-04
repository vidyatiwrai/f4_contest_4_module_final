// src/components/MyCartPage.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, checkout } from "./action";

const MyCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    dispatch(checkout());
    alert("Items have been checked out!");
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    return totalPrice.toFixed(2); // Format the total price to two decimal places
  };

  return (
    <div>
      <h1>My Cart Page</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={product.id} style={{ display: "flex", alignItems: "center" }}>
            <span>{index + 1}</span>
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: "10%", height: "50px", marginRight: "10px" }}
            />
            <div>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => handleRemoveFromCart(product.id)}>
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ background: "black", color: "white", padding: "10px", marginTop: "20px" }}>
        <h2>Checkout</h2>
        <ol>
          {cart.map((product, index) => (
            <li key={product.id}>{index + 1}. {product.title}</li>
          ))}
        </ol>
        <p>Total Price: ${getTotalPrice()}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default MyCartPage;
