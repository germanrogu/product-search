import React, { useEffect } from "react";
import "../styles/SearchResults.scss";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchItemsRequest } from "../store/actions";
import LinkToItem from "../components/LinkToItem";
import { capitalizeFirstLetter } from "../utils/Capitalize";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.searchResults);
  const loading = useSelector((state) => state.search.loading);
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchItemsRequest(searchQuery));
    }
  }, [dispatch, searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      document.title = capitalizeFirstLetter(searchQuery) + " | Product Search";
    }
  }, [searchQuery]);

  return (
    <div className='search-results'>
      <div className='products-container'>
        {loading ? (
          <p>Cargando resultados...</p>
        ) : results.length !== 0 ? (
          results.map((item) => <LinkToItem key={item.id} item={item} />)
        ) : (
          <p>No hay resultados</p>
        )}
      </div>
    </div>
  );
};
