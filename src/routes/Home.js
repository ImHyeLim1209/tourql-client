import React from "react";
import { gql, useQuery } from '@apollo/client';
import { Container, Header, Title, Sights, Loading } from '../components/HomeStyle'
import Search from '../components/Search'
import Sight from '../components/Sight'
//import { useQuery } from "@apollo/react-hooks"

const GET_SIGHTS = gql`
{
  sights(city:1, keyword:"공원") {
    title
    firstimage
    contentid
  }
}
`;

export default () => {
  const { loading, error, data } = useQuery(GET_SIGHTS);
  return (
    <Container>
      <Header>
        <Title>Tour Sight Search</Title>
        <Search />
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data.sights &&
        (<Sights>
          {data.sights.map(sight => <Sight key={sight.contentid} id={sight.contentid} title={sight.title} image={sight.firstimage}>{sight.title}</Sight>)}
        </Sights>)}
    </Container>
  )
};