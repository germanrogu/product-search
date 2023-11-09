import React from "react";
import { Link } from "react-router-dom";
import ImageResult from "./ImageResult";

const LinkToItem = ({ item }) => (
  <Link className='search-results-item' key={item.id} to={`/items/${item.id}`}>
    <ImageResult className='item-picture' src={item.picture} alt={item.title} />
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
);

export default LinkToItem;
