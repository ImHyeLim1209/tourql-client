import React, { useState, useEffect, useRef } from "react";
import Search from '../components/Search'
import Sights from '../components/Sights'
import './Home.css';

export default () => {
  const [key, setKeyword] = useState('공원');
  console.log("Home", key)
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