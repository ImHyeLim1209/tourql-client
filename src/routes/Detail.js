import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

//query에 변수가 포함된 경우 query의 이름을 적어야 함
const GET_SIGHT = gql`
query Sight($id: Int!) {
  sight(id: $id) {
    homepage
    tel
    title
    firstimage
    addr1
    addr2
    mapx
    mapy
    overview
  }
}
`;

export default () => {
  const { id } = useParams();
  console.log(id);
  const { loading, data, error } = useQuery(GET_SIGHT, {
    variables: {
      id: Number(id)
    },
  });

  if (loading) { return 'loading' };

  if (data && data.sight) {
    return data.sight.title;
  }

  return "Detail";
};