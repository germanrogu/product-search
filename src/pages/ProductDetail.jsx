import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.scss";
import { clearStore, loadProductDetailsRequest } from "../store/actions";
import ImageResult from "../components/ImageResult";
import ProductInfo from "../components/ProductInfo";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.search.productDetails);
  const loading = useSelector((state) => state.search.loading);

  useEffect(() => {
    if (id) {
      dispatch(clearStore());
      dispatch(loadProductDetailsRequest(id));
    }
    return () => {
      dispatch(clearStore());
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
        {loading ? (
          <p>Cargando detalles del producto...</p>
        ) : product ? (
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
          <p>No se encontraron detalles del producto.</p>
        )}
      </div>
    </div>
  );
};
