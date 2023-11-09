import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../assets/Logo_ML.png";

import "../styles/Navbar.scss";
import { useDispatch } from "react-redux";
import { clearStore } from "../store/actions";
import InputSearch from "./InputSearch";
import ButtonSearch from "./ButtonSearch";
import ImageResult from "./ImageResult";

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
    dispatch(clearStore());
  };
  return (
    <nav className='navbar'>
      <Link to='/'>
        <ImageResult
          onClick={handleCleanStore}
          className='logo'
          src={Logo}
          alt={"Logo"}
        />
      </Link>
      <div className='search-box'>
        <InputSearch
          value={searchQuery}
          onChange={handleSearchInputChange}
          onKeyDown={handleEnterKeyPress}
        />
        <ButtonSearch onClick={handleSearchButtonClick} />
      </div>
    </nav>
  );
};
