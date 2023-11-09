import React from "react";

const ProductInfo = ({ product }) => (
  <div className='product-details'>
    <p className='sold-quantity'>Sold Quantity: {product.item.sold_quantity}</p>
    <h1 className='title'>{product.item.title}</h1>
    <p className='price'>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(product.item.price.amount)}
    </p>
    <button className='buy-button'>Comprar</button>
  </div>
);

export default ProductInfo;
