import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #000000;
`;
export const Logo = styled.img`
  width: 168px;
  height: 50px;
  object-fit: scale-down;
`;
export const SectionRow = styled.div`
  width: 100%;
  height: 24px;
  background-color: #060606;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-wrap: wrap;
  color: #fff;
`;

export const InfoSpan = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 10px;
  margin-right: 15px;
`;
export const Menu = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  color: #fff;
`;

export const ItemMenu = styled.li`
  list-style-type: none;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;

  :hover {
    color: #949494;
  }
`;
export const Banner = styled.div`
  width: 100%;
  height: 400px;
  max-height: 400px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 450px) {
    max-height: 50em;
    background-size: 190px;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  object-fit: scale-down;
  height: auto;
`;

export const ContainerProcess = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const CardProcess = styled.section`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
export const ImageProcess = styled.img`
  max-width: 100%;
  height: auto;
`;
export const TitleProcess = styled.h3`
  font-size: 0.9em;
`;
export const DescriptionProcess = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
`;
export const ContainerDraws = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-top: 50px;
  padding-left: 20px;
  flex-wrap: wrap;
  width: 100%;
`;
export const TitleDraw = styled.h1`
  font-family: Roboto, sans-serif;
`;
export const ContainerRow = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
`;
export const CardDraw = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4em;
  height: 380px;
  -webkit-box-shadow: 3px 3px 12px 0px rgba(57, 50, 50, 0.51);
  -moz-box-shadow: 3px 3px 12px 0px rgba(57, 50, 50, 0.51);
  box-shadow: 3px 3px 12px 0px rgba(57, 50, 50, 0.51);
`;
export const SliderDraw = styled.div`
  height: 250px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
`;
export const ImageDraw = styled.img`
  width: 100%;
`;

export const StatusDraw = styled.div`
  width: 100%;
  font-family: Roboto, sans-serif;
  display: flex;
  margin-top: 40px;
  border-radius: 50px;
  color: #fff;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${(props) => (props.status === "active" ? "green" : "red")};
`;

export const ContainerRowWinners = styled.div`
  display: flex;
  margin-top: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  width: 100%;
  height: 120px;
  justify-content: space-between;
`;
export const FooterRow = styled.div`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;
export const ItemFooter = styled.span` 
  width: 100px;
  height: 40px;
  font-family:Roboto;
  text-align: center;
  line-height: 35px;
  
  cursor: pointer;

  &:hover {
    background-color: #ededed;
  }

`;
export const FooterSocial = styled.div`
  width: 200px;
`;
