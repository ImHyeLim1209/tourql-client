import React, { useState, useEffect, useRef } from "react";
import { gql, useQuery } from '@apollo/client';
import Sight from '../components/Sight'

const GET_SIGHTS = gql`
  query Sights($keyword: String, $pageNo: Int, $numOfRows: Int) {
    sightList(keyword: $keyword, pageNo: $pageNo, numOfRows: $numOfRows) {
      sights{
        contentid
        title
        firstimage
        isLiked @client
      }
      totalCount
    }
  }
  `;
const loadSightCount = 8;
let totalCount = 1;



export default ({ keyword: keyword }) => {
  const [page, setPage] = useState(window.sessionStorage.getItem('page') ? window.sessionStorage.getItem('page') : 1);

  const { loading, error, data } = useQuery(GET_SIGHTS, {
    variables: { keyword: keyword, pageNo: Number(page), numOfRows: Number(loadSightCount) },
    onCompleted: () => {
      totalCount = data?.sightList?.totalCount;
    }
  });

  useEffect(() => {
    window.sessionStorage.setItem('page', page);
  }, [page]);

  return (
    <>
      {loading && <div id="loading">Loading...</div>}
      {!loading &&
        (
          <>
            <div id="before" onClick={(e) => { page > 1 && setPage(page - 1) }}></div>
            <div className="sights">
              {data?.sightList?.sights?.map(sight => <Sight key={sight.contentid} id={sight.contentid} title={sight.title} isLiked={sight.isLiked} image={sight.firstimage}>{sight.title}</Sight>)}
            </div>
            <div id="next" onClick={(e) => { totalCount > loadSightCount * page && setPage(page + 1) }}></div>
          </>
        )
      }
    </>
  )
}