import React from "react";

const ImageResult = ({ src, alt, className, onClick }) => (
  <img className={className} src={src} alt={alt} onClick={onClick} />
);

export default ImageResult;
