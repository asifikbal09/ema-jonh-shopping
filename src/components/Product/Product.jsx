import React from 'react';
import './product.css'

const Product = (props) => {
    const {name , price, seller , rating, img} = props.product;
    const handleAddCart = props.handleAddCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {rating} star </p>
            </div>
            <button onClick={()=>handleAddCart(props.product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;