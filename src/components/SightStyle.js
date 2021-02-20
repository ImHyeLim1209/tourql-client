import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  width: 100%;
  display:flex;
  overflow: hidden;
  flex-direction: column;
`;

export const Thumbnail = styled.div`
  width: 100%;
  border-radius: 7px;
  flex: 1 1 auto;
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

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${props => props.bg});
`