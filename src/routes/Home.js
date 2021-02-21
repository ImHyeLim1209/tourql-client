import React, { useState, useEffect, useRef } from "react";
import Search from '../components/Search'
import Sights from '../components/Sights'
import './Home.css';

export default () => {
  const [key, setKeyword] = useState(sessionStorage.getItem('keyword') ? sessionStorage.getItem('keyword') : '공원');
  return (
    <div className="container">
      <header>
        <h1>Tour Sight Search</h1>
        <Search handleKeyword={(text) => {
          setKeyword(text);
        }} />
      </header>
      <Sights keyword={key} />
    </div>
  )
};