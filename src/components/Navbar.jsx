import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_ML.png";
import Search from "../assets/ic_Search.png";
import "../styles/Navbar.scss";

export const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    onSearch(searchQuery);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchQuery);
    }
  };
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
          value={searchQuery}
          onChange={handleSearchInputChange}
          onKeyDown={handleEnterKeyPress}
        />
        <img
          src={Search}
          alt='Icono de Búsqueda'
          className='search-icon'
          onClick={handleSearchButtonClick}
        />
      </div>
    </nav>
  );
};
