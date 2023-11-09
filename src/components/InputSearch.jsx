import React from "react";

const InputSearch = ({ value, onChange, onKeyDown }) => (
  <input
    type='text'
    placeholder='Nunca dejes de buscar'
    className='search-input'
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

export default InputSearch;
