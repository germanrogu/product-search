import React, { useEffect } from "react";
import "../styles/SearchResults.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { searchItemsRequest } from "../store/actions";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.searchResults);
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchItemsRequest(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <div className='search-results'>
      <div className='products-container'>
        {results.length !== 0 ? (
          results.map((item) => (
            <Link
              className='search-results-item'
              key={item.id}
              to={`/items/${item.id}`}
            >
              <img
                src={item.picture}
                alt={item.title}
                className='item-picture'
              />
              <div className='item-details'>
                <div className='item-price'>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.price.amount)}
                </div>
                <div className='item-title'>{item.title}</div>
                <div className='item-condition'>{item.condition}</div>
              </div>
            </Link>
          ))
        ) : (
          <p>Cargando resultados...</p>
        )}
      </div>
    </div>
  );
};
