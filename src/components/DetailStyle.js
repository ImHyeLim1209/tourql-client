import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const Column = styled.div`
  margin-left: 10px;
  width: 40%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

export const AddrInfo = styled.h4`
  margin: 10px 0px;
`;

export const DetailInfo = styled.h4`
  margin: 5px 0px;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Image = styled.div`
  width: 25%;
  height: 60%;
  border-radius: 7px;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.bg});
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
