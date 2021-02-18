import React, { useState } from 'react';

const Search = ({ handleKeyword }) => {

  const [keyword, setKeyword] = useState('');

  const changeKeyword = (text) => {
    setKeyword(text);
  }

  return (<div className="search-bar">
    <input className="form-control" type="text" onChange={(e) => { changeKeyword(e.target.value) }} />
    <button className="form-submit-btn btn" onClick={() => handleKeyword(keyword)}>검색</button>
  </div>);
};

export default Search;