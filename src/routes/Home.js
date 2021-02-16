import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks"

const GET_SIGHTS = gql`
{
  sights(city:1, keyword:"공원") {
    title
    addr1
    addr2
    homepage
    contentid
  }
}
`;

export default () => {
  const { loading, error, data } = useQuery(GET_SIGHTS);
  console.log(loading, error, data);
  if (loading) {
    return "loading..."
  }
  if (data && data.sights) {
    return data.sights.map(sight => <h1 key={sight.contentid}>{sight.title}</h1>);
  }
};