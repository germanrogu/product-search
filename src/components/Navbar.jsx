import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../assets/Logo_ML.png";
import Search from "../assets/ic_Search.png";
import "../styles/Navbar.scss";
import { useDispatch } from "react-redux";
import { clearProductDetails, setSearchResults } from "../store/actions";

export const Navbar = () => {
  const [searchParams] = useSearchParams();
  const initialSearchQuery = searchParams.get("search");
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || "");
  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
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

  const handleCleanStore = () => {
    setSearchQuery("");
    dispatch(clearProductDetails());
    dispatch(setSearchResults([]));
  };
  return (
    <nav className='navbar'>
      <Link to='/'>
        <img
          onClick={handleCleanStore}
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
