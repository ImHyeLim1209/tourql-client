import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, title, image }) => (
  <div>
    <Link to={`/${id}`}>
      {title}
    </Link>
  </div>
)