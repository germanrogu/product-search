import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_ML.png";
import Search from "../assets/ic_Search.png";
import "../styles/Navbar.scss";

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <img className='logo' src={Logo} alt='Logo' />
      </Link>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Nunca dejes de buscar'
          className='search-input'
        />
        <img src={Search} alt='Icono de Búsqueda' className='search-icon' />
      </div>
    </nav>
  );
};
