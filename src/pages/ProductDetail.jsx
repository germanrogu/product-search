import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.scss";
import {
  clearProductDetails,
  loadProductDetailsRequest,
} from "../store/actions";
import ImageResult from "../components/ImageResult";
import ProductInfo from "../components/ProductInfo";

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

  useEffect(() => {
    if (product) {
      document.title = product.item.title;
    }
  }, [product]);

  return (
    <div className='product-detail'>
      <div className='product-container'>
        {product ? (
          <>
            <div className='product-image'>
              <ImageResult
                src={product.item.picture}
                alt={product.item.title}
              />
            </div>
            <ProductInfo product={product} />
            <div className='product-description'>
              <h2 className='description-title'>Descripción del producto</h2>
              <p className='description'>{product.item.description}</p>
            </div>
          </>
        ) : (
          <p>Cargando detalles del producto...</p>
        )}
      </div>
    </div>
  );
};
