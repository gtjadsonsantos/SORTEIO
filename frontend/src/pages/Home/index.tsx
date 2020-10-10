import React, { useEffect, useState } from "react";
import api, { URL } from "../../services/api";
import { IBusiness, IDraw, IImage } from "../../types";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import WhatsApp from "@material-ui/icons/WhatsApp";
import ReactMarkdown from "react-markdown";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";

import {
  Container,
  Menu,
  ItemMenu,
  Header,
  Logo,
  SectionRow,
  InfoSpan,
  Banner,
  BannerImage,
  ContainerProcess,
  CardProcess,
  TitleProcess,
  ImageProcess,
  DescriptionProcess,
  ContainerDraws,
  ContainerRow,
  TitleDraw,
  CardDraw,
  SliderDraw,
  ImageDraw,
  StatusDraw,
  ContainerRowWinners,
  Footer,
  FooterRow,
  FooterSocial,
  ItemFooter,
  Hr
} from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import WinnerListDraws from "../../components/WinnerDraw/List";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 0,
  },
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [draws, setDraws] = useState<IDraw[]>([]);
  const [images, setImages] = useState<IImage[]>([]);
  const [businnes, setBusinnes] = useState<IBusiness>();
  const [countWinners, setCounterWinnners] = useState<number>(0);

  useEffect(() => {
    async function getImages() {
      const { data } = await api.get("/images");

      setImages(data);
    }
    getImages();
  }, []);

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/draws");

      setDraws(data);
    }
    getDraws();
  }, []);

  useEffect(() => {
    async function getWinners() {
      const { data } = await api.get(
        "/join_winners_participants_users_quotas_draw"
      );

      setCounterWinnners(data[0]?.length);
    }
    getWinners();
  }, []);

  useEffect(() => {
    async function getBusinnes() {
      const { data } = await api.get("/business");

      setBusinnes(data[0]);
    }
    getBusinnes();
  }, []);
  return (
    <Container>
      <SectionRow>
        <InfoSpan>CNPJ: {businnes?.cnpj}</InfoSpan>
        <InfoSpan>{businnes?.fantasy_name}</InfoSpan>
      </SectionRow>
      <Header>
        <Logo src={businnes?.logo} alt="Logo" />
        <Menu>
          <ItemMenu>
            <a href="/Signin">LOGIN</a>
          </ItemMenu>
        </Menu>
      </Header>
      <Banner src={businnes?.banner}></Banner>
      <ContainerProcess>
        <CardProcess>
          <ImageProcess src={`${URL}/passo-1.png`} />
          <TitleProcess>Escolha uma Rifa</TitleProcess>
          <DescriptionProcess>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </DescriptionProcess>
        </CardProcess>
        <CardProcess>
          <ImageProcess src={`${URL}/passo-2.png`} />
          <TitleProcess>Escolha uma Rifa</TitleProcess>
          <DescriptionProcess>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </DescriptionProcess>
        </CardProcess>
        <CardProcess>
          <ImageProcess src={`${URL}/passo-3.png`} />
          <TitleProcess>Escolha uma Rifa</TitleProcess>
          <DescriptionProcess>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </DescriptionProcess>
        </CardProcess>
        <CardProcess>
          <ImageProcess src={`${URL}/passo-4.png`} />
          <TitleProcess>Escolha uma Rifa</TitleProcess>
          <DescriptionProcess>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </DescriptionProcess>
        </CardProcess>
      </ContainerProcess>
      <ContainerDraws>
        <TitleDraw id="sorteios">SORTEIOS </TitleDraw>

        <p>Acesse o ambiente para participar dos sorteios</p>
        <ContainerRow>
          {draws.map((draw) => (
            <CardDraw>
              <SliderDraw>
                {images.map((image) =>
                  image.draws_draw_id === draw.draw_id ? (
                    <ImageDraw src={image.data_image} />
                  ) : (
                    <></>
                  )
                )}
              </SliderDraw>
              <TitleDraw>{draw.title}</TitleDraw>
              <h4 style={{ color: "#8c8c8c" }}>{draw.subtitle}</h4>
              <StatusDraw status={draw.status}>
                <p>{draw.status === "active" ? "Ativo" : "Encerrado"}</p>
              </StatusDraw>
            </CardDraw>
          ))}
        </ContainerRow>
      </ContainerDraws>
      <ContainerDraws
        style={{ display: `${countWinners > 0 ? "flex" : "none"}` }}
      >
        <TitleDraw>GANHADORES </TitleDraw>
        <p>Veja quem já ganhou</p>
        <ContainerRowWinners style={{ marginTop: "30px" }}>
          <WinnerListDraws />
        </ContainerRowWinners>
      </ContainerDraws>
      <Footer>
        <FooterRow>
          <ItemFooter onClick={handleClickOpen} style={{ color: "#000" }}>
            Regulação
          </ItemFooter>
          <FooterSocial>
            <a
              href={businnes?.social
                ?.split(",")[0]
                .replace(`"`, "")
                .replace(`"`, "")}
              style={{ color: "#083aa6" }}
            >
              <Facebook fontSize={"large"} />
            </a>
            <a
              href={businnes?.social
                ?.split(",")[2]
                .replace(`"`, "")
                .replace(`"`, "")}
              style={{ color: "#8c6dad" }}
            >
              <Instagram fontSize={"large"} />
            </a>
            <a
              href={businnes?.social
                ?.split(",")[1]
                .replace(`"`, "")
                .replace(`"`, "")}
              style={{ color: "green" }}
            >
              <WhatsApp fontSize={"large"} />
            </a>
          </FooterSocial>
        </FooterRow>
        <Hr/>
        <FooterRow>
          <p style={{ fontFamily: "Roboto,sans-serif", color: "#999999" }}>
            ©{new Date().getFullYear()} Todos os direitos reservados
          </p>
        </FooterRow>
      </Footer>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Regulação"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ReactMarkdown source={businnes?.regulation} escapeHtml={true} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
