import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, title, image }) => {

  let thumbnailImage = {
    backgroundImage: image ? `url(${image})` : "url(nature.png)"
  };

  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="sight-container">
        <div className="thumbnail" style={thumbnailImage} bg={image} />
        <h1 className="sight-title">{title}</h1>
      </div>
    </Link>
  )
}