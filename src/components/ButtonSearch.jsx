import React from "react";
import Search from "../assets/ic_Search.png";

const ButtonSearch = ({ onClick }) => (
  <img
    src={Search}
    alt='Icono de Búsqueda'
    className='search-icon'
    onClick={onClick}
  />
);

export default ButtonSearch;
