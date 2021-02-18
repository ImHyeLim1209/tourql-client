import React, { useState, useEffect } from "react";
import { gql, useQuery } from '@apollo/client';
import { Container, Header, Title, Sights, Loading } from '../components/HomeStyle'
import Search from '../components/Search'
import Sight from '../components/Sight'
import Query from '@apollo/client/react/components';

const GET_SIGHTS = gql`
  query Sights($keyword: String, $pageNo: Int) {
    sights(keyword: $keyword, pageNo: $pageNo) {
      title
      firstimage
      contentid
    }
  }
  `;

export default () => {
  const [isLoading, setLoading] = useState(true);
  const [key, setKeyword] = useState('공원');
  const [page, setPage] = useState(1);
  const [sights, setSights] = useState([]);

  const { loading, error, data } = useQuery(GET_SIGHTS, {
    variables: { keyword: key, pageNo: Number(page) },
    onCompleted: () => {
      setLoading(false); //isLoading을 업데이트 함으로써 렌더링이 다시 되므로 새로운 키워드로 다시 쿼리를 요청한다.
      setSights([].concat(data.sights));
    }
  });

  return (
    <Container>
      <Header>
        <Title>Tour Sight Search</Title>
        <Search handleKeyword={(text) => {
          setKeyword(text);
          setLoading(true);
        }} />
      </Header>
      {isLoading && loading && <Loading>Loading...</Loading>}
      {!isLoading && !loading &&
        (<Sights>
          {sights.map(sight => <Sight key={sight.contentid} id={sight.contentid} title={sight.title} image={sight.firstimage}>{sight.title}</Sight>)}
        </Sights>)}
    </Container>
  )
};