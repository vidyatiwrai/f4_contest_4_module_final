// src/components/HomePage.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setProducts } from "./action";

const HomePage = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const products = productsState.products;

  console.log("Products in state:", productsState);

  useEffect(() => {
    // Fetch products from API
    fetch('https://dummyjson.com/products?category=shirts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setProducts(data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      // If the product is not in the cart, dispatch the addToCart action
      dispatch(addToCart(product));
    } else {
      // Handle the case where the product is already in the cart
      alert("Product is already in the cart");
    }
  };

  return (
    <div className="homepage">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="item">
            <img
              src={product.images[0]}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HomePage;
