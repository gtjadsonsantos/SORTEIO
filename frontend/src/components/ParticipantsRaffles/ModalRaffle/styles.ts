import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 800px;
`;
export const Title = styled.h1`
  font-weight: 700;
`;
export const Subtitle = styled.h2`
  color: #6a6a6a;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 100%;
  height: 60px;
`;
export const ContainerRow = styled.div`
  display: flex;
  margin-top: 90px;
  height: 700px;
  align-items: center;

`;

export const ContainerRowInfo = styled.div`
  display: flex;
  margin-top: 90px;
  height: 700px;
  align-items: center;
  @media only screen and (min-width: 500px) {
    flex-wrap: wrap;     
  }


`;
export const ContainerSlider = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow-x: scroll;
  display: flex;
  ::-webkit-scrollbar {
    width: 10px;
  }
`;

export const ImageSlider = styled.img`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
  display: block;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const ContainerInfoRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media only screen and (min-width: 500px) {
   justify-content: space-evenly;
   width: 80%;
  }
`;

export const ValorTitle = styled.h3`
  color: "#fff";
  font-weight: "bold";
  text-align: center;
  line-height: 25px;
  margin: 0;
`;
export const Valor = styled.div`
  background-color: #28a745;
  color: #fff;
  margin: 0;
  width: 240px;
  height: 70px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DateTitle = styled.h3`
  color: "#fff";
  font-weight: "bold";
  text-align: center;
  line-height: 25px;
  margin: 0;
`;
export const DateDraw = styled.div`
  background-color: #343a40;
  color: #fff;
  margin: 0;
  width: 240px;
  height: 70px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Description = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 15px;
  height: 100%;
  max-height: 450px;
  width: 50%;
`;

export const Timer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  height: 90px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #343a40;
`;
export const CardProcess = styled.div`
  width: 300px;
  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 500px) {
    height: 310px;
    width: 260px;
  }
`;
export const CardImg = styled.img`
  width: 240px;
  height: 197px;
`;

export const ContainerQuotas = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  @media only screen and (min-width: 500px) {
    margin-top: 250px;
  }

`;
export const QuotasHeader = styled.div`
  width: 100%;
  font-family: Roboto, sans-serif;
  padding-left: 10%;
`;
export const ContainerButtonsFilter = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  font-family: Roboto, sans-serif;
  padding-left: 160px;
  margin-top: 40px;
`;

export const ButtonsFilter = styled.button`
  background-color: ${props => props.color};
  height: 50px;
  width: 150px;
  cursor: pointer;
  color:#fff;
  border: 1px solid;
  font-size: 16px;
  line-height: 1.5;
`

export const ContinerQuotasShow = styled.div `
  display:flex;
  flex-wrap:wrap;
  margin-top: 40px;
  justify-content:center;
  min-height: 200px;
`
export const ButtonQuota = styled.button`
  background-color: ${props => props.color};
  height: 38px;
  width: 53px;
  cursor: pointer;
  color:#fff;
  border: 1px solid;
  font-size: 16px;
  line-height: 1.5;
`
export const ContainerConfirmation = styled.div `
  bottom: 0px ;
  display: ${props => props.length > 0?"flex":"none"};
  position:fixed;
  background-color: #fff;
  height: 120px;
  width: 100%;
  align-items:center;
  justify-content: space-around;
 `
 export const ButtonConfirmation = styled.button`
 background-color: yellow;
 height: 50px;
 width: 150px;
 cursor: pointer;
 color:#000;
 border: 0px solid;
 font-size: 16px;
 line-height: 1.5;
`