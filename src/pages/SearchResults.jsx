import React from "react";
import "../styles/SearchResults.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SearchResults = () => {
  const results = useSelector((state) => state.search.searchResults);

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
                  {item.price.amount} {item.price.currency}
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
