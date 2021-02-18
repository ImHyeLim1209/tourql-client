import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  width: 100%;
  display:flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Thumbnail = styled.div`
  width: 100%;
  flex: 1 1 auto;
  border-radius: 7px;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.bg});
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Title = styled.h1`
  color: #747474;
  text-decoration: none !important;
  text-align: center;
  font-size: 20px;
`;