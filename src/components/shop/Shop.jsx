import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddCart= (product) => {
    const newCart = [...cart,product];
    setCart(newCart);
  }

  return (
    <div className="shop">
      <div className="products-container">
        {
        products.map(product =>  <Product 
            product={product}
            key = {product.id}
            handleAddCart= {handleAddCart}
        ></Product> )
       
        }
      </div>
      <div className="cart-container">
        <h3>ladjfkljdsakljf</h3>
        <p>shopping cart; {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
