import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { Container, Thumbnail, Title, Icon } from './SightStyle';

const LIKE_SIGHT = gql`
  mutation toggleLikeSight($id: Int!, $isLiked: Boolean) {
    toggleLikeSight(id:$id, isLiked:$isLiked) @client
  }
`

export default ({ id, title, image, isLiked }) => {
  const [toggleLikeSight] = useMutation(LIKE_SIGHT,
    {
      variables: { id: parseInt(id), isLiked: Boolean(isLiked) }
    }
  );

  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <Container>
        <Thumbnail bg={image ? image : "./res/nature.png"} ></Thumbnail>
        <Icon bg={isLiked ? "./res/like.png" : "./res/unlike.png"} onClick={(e) => {
          e.preventDefault();
          toggleLikeSight();
        }}></Icon>
        <Title className="sight-title">{title}</Title>
      </Container>
    </Link>
  )
}