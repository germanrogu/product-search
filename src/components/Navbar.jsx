import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo_ML.png";
import Search from "../assets/ic_Search.png";
import "../styles/Navbar.scss";
import { useDispatch } from "react-redux";
import { searchItemsRequest } from "../store/actions";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (searchQuery) => {
    dispatch(searchItemsRequest(searchQuery));
    navigate(`/items?search=${searchQuery}`);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    handleSearch(searchQuery);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };
  return (
    <nav className='navbar'>
      <Link to='/'>
        <img
          onClick={() => setSearchQuery("")}
          className='logo'
          src={Logo}
          alt='Logo'
        />
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
