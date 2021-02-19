import React, { useState, useEffect, useRef } from "react";
import { gql, useQuery } from '@apollo/client';
import Sight from '../components/Sight'

const GET_SIGHTS = gql`
  query Sights($keyword: String, $pageNo: Int, $numOfRows: Int) {
    sightList(keyword: $keyword, pageNo: $pageNo, numOfRows: $numOfRows) {
      sights{
        title
        firstimage
        contentid
      }
      totalCount
    }
  }
  `;
const loadSightCount = 8;
let totalCount = 1;

export default ({ keyword: keyword }) => {
  const [page, setPage] = useState(1);
  const [sights, setSights] = useState([]);

  useEffect(() => {
    //DOM으로 2번째 줄에 CSS를 만들어 붙인다.(이전, 이후 페이지 이동)
  }, [page]);

  const { loading, error, data } = useQuery(GET_SIGHTS, {
    variables: { keyword: keyword, pageNo: Number(page), numOfRows: Number(loadSightCount) },
    onCompleted: () => {
      setSights(data.sightList.sights);
      totalCount = data.sightList.totalCount;
    }
  });

  return (
    <>
      {loading && <div id="loading">Loading...</div>}
      {!loading &&
        (
          <>
            <div className="sights">
              {sights?.map(sight => <Sight key={sight.contentid} id={sight.contentid} title={sight.title} image={sight.firstimage}>{sight.title}</Sight>)}
            </div>
            <div id="next" onClick={(e) => { totalCount > loadSightCount * page && setPage(page + 1) }}></div>
          </>
        )
      }
    </>
  )
}