import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.scss";
import {
  clearProductDetails,
  loadProductDetailsRequest,
} from "../store/actions";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.search.productDetails);

  useEffect(() => {
    if (id) {
      dispatch(clearProductDetails());
      dispatch(loadProductDetailsRequest(id));
    }
    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, id]);

  return (
    <div className='product-detail'>
      <div className='product-container'>
        {product ? (
          <>
            <div className='product-image'>
              <img src={product.item.picture} alt={product.item.title} />
            </div>
            <div className='product-details'>
              <p>Sold Quantity: {product.item.sold_quantity}</p>
              <h1>{product.item.title}</h1>
              <p>
                {product.item.price.amount} {product.item.price.currency}
              </p>
              <button className='buy-button'>Comprar</button>
            </div>
            <div className='product-description'>
              <h2>Descripcion del producto</h2>
              <p>{product.item.description}</p>
            </div>
          </>
        ) : (
          <p>Cargando detalles del producto...</p>
        )}
      </div>
    </div>
  );
};
