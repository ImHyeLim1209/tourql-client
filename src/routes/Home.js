import React from "react";
import { gql, useQuery } from '@apollo/client';
import { Container, Header, Title, Subtitle, Loading } from '../components/style'
import Search from '../components/Search'
import Sight from '../components/Sight'
//import { useQuery } from "@apollo/react-hooks"

const GET_SIGHTS = gql`
{
  sights(city:1, keyword:"공원") {
    title
    firstimage2
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
      {!loading && data.sights && data.sights.map(sight => <Sight key={sight.contentid} id={sight.contentid} title={sight.title} image={sight.firstimage2}>{sight.title}</Sight>)}
    </Container>
  )

  if (loading) {
    return "loading..."
  }
  if (data && data.sights) {
    return data.sights.map(sight => <h1 key={sight.contentid}>{sight.title}</h1>);
  }
};