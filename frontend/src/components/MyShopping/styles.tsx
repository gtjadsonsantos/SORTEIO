import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CardItem = styled.div`
  height: 140px;
  margin: 10px 10px 10px 10px;
  
  -webkit-box-shadow: -1px -1px 22px -6px rgba(106, 143, 123, 1);
  -moz-box-shadow: -1px -1px 22px -6px rgba(106, 143, 123, 1);
  box-shadow: -1px -1px 22px -6px rgba(106, 143, 123, 1);
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
`;
export const Title = styled.h2`
  font-family: Roboto, sans-serif;
`;
export const SubTitle = styled.h4`
  font-family: Roboto, sans-serif;
`;

export const RowText = styled.p`
  font-family: Roboto, sans-serif;
`;
