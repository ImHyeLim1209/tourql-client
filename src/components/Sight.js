import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Thumbnail, Title } from '../components/SightStyle'

export default ({ id, title, image }) => (

  <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
    <Container>
      <Thumbnail bg={image} />
      <Title>{title}</Title>
    </Container>
  </Link>

)