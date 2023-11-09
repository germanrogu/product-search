import React from "react";
import "../styles/SearchResults.scss";
import { useSelector } from "react-redux";

export const SearchResults = () => {
  const results = useSelector((state) => state.search.searchResults);

  return (
    <div className='search-results'>
      <div className='products-container'>
        {results.map((item) => (
          <div key={item.id} className='search-results-item'>
            <img src={item.picture} alt={item.title} className='item-picture' />
            <div className='item-details'>
              <div className='item-price'>
                {item.price.amount} {item.price.currency}
              </div>
              <div className='item-title'>{item.title}</div>
              <div className='item-condition'>{item.condition}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
