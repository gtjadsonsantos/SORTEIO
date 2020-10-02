import React, { useEffect, useState } from "react";
import api, { URL } from "../../../services/api";
import {
  IDraw_QuotasVO,
  IDraw,
  IImage,
  IParticipants_Draw,
} from "../../../types";
import TimerCounter from "../../../global/Timer";
import ReactMarkdown from "react-markdown";
import {
  Container,
  Header,
  Title,
  Subtitle,
  ContainerRow,
  ContainerSlider,
  ContainerColumn,
  ContainerInfoRow,
  Valor,
  ValorTitle,
  DateTitle,
  DateDraw,
  Description,
  Timer,
  CardProcess,
  CardImg,
  ContainerQuotas,
  QuotasHeader,
  ContainerButtonsFilter,
  ButtonsFilter,
  ContinerQuotasShow,
  ButtonQuota,
  ContainerConfirmation,
  ButtonConfirmation,
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function MoadalDraw() {
  const [quotasDraw, setQuotasDraw] = useState<IDraw_QuotasVO[]>([]);
  const [quotasVerifyDraw, setQuotasVerifyDraw] = useState<any>([]);
  const [participants, setParticipants] = useState<IParticipants_Draw[]>([]);
  const [draw, setDraw] = useState<IDraw>();
  const [images, setImages] = React.useState<IImage[]>([]);
  const [draw_id, setDraw_Id] = useState<number>();
  const [day, setDay] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [showTime, setShowTime] = useState<string>();
  const [quotasSelected, setQuotasSelected] = useState<string[]>([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    async function getDraw_Quotas() {
      const { data } = await api.get("/draw_quotas");
      setQuotasDraw(data);
    }
    getDraw_Quotas();
  }, []);

  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_draws_quotas?draw_id=${sessionStorage.getItem(
          "draw_id"
        )}`
      );
      setParticipants(data[0]);
    }
    getParticipants();
  }, []);
  useEffect(() => {
    const dateNew: any = new Date(`${draw?.date_draw}`);
    const dateResult = TimerCounter(dateNew);
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);

      if (
        Math.sign(dateResult.days) === -1 &&
        Math.sign(dateResult.hours) === -1 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      } else {
        setShowTime(
          `Encerrae em  Dias: ${dateResult.days} Horas: ${dateResult.hours} Minutos: ${dateResult.minutes}`
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get(
        `/draw/${sessionStorage.getItem("draw_id")}`
      );

      const id: any = sessionStorage.getItem("draw_id");
      setDraw_Id(parseInt(id));
      setDraw(data[0]);

      const date = new Date(data[0].date_draw);
      const months = [
        `01`,
        `02`,
        `03`,
        `04`,
        `05`,
        `06`,
        `07`,
        `08`,
        `09`,
        `10`,
        `11`,
        `12`,
      ];
      setDay(`${date.getUTCDate()}`);
      setMonth(`${months[date.getMonth()]}`);
      setYear(`${date.getUTCFullYear()}`);
      setMinutes(`${date.getMinutes()}`);
    }
    getDraws();
  }, []);

  useEffect(() => {
    async function getImages() {
      const { data } = await api.get("/images");

      setImages(data);
    }
    getImages();
  }, []);

  useEffect(() => {
    function renderQuotas() {
      const render = quotasDraw.map((quota_draw) => {
        let response;

        participants.map((participant_item) => {
          response =
            participant_item.draw_quota_id == quota_draw.draw_quota_id
              ? { ...participant_item }
              : {
                  status: "free",
                  number: quota_draw.number,
                  draw_quota_id: quota_draw.draw_quota_id,
                  draw_id,
                };
        });

        return response;
      });
      setQuotasVerifyDraw(render);
    }
    renderQuotas();
  }, [quotasDraw, participants]);
  const handleSetQuotasSelected = (number: string, status: string) => {
    if (status === "free") {
      const verify = quotasSelected.filter((quota) => quota === number);

      if (verify.length === 0) {
        setQuotasSelected([...quotasSelected, number]);
      }
      console.log(quotasSelected);
    }
  };

  const handleSetQuotasExcludeSelected = (number: string) => {
    const verify = quotasSelected.filter((quota) => quota != number);
    setQuotasSelected(verify);
  };

  async function sendApi() {
    if (quotasSelected.length > 0) {
      const dataUser: any = sessionStorage.getItem("data");

      quotasSelected.map(async (item) => {
        const payload = {
          users_user_id: JSON.parse(dataUser).user_id,
          draw_quotas_draw_quota_id: parseInt(
            `${
              quotasDraw.find((quota) => quota.number === item)?.draw_quota_id
            }`
          ),
          draws_draw_id: draw_id,
        };

        const { data } = await api.post("/participant_draw", payload);
        console.log(data);
      });
    }
  }
  

  return (
    <Container>
      <Header>
        <Title>{draw?.title}</Title>
        <Subtitle>{draw?.subtitle}</Subtitle>
      </Header>
      <ContainerRow>
        <ContainerSlider>
          {images.map((image, index) =>
            image.draws_draw_id == draw_id ? (
              <img
                src={image.data_image}
                style={{ width: "100%", height: "90%" }}
              />
            ) : (
              <></>
            )
          )}
        </ContainerSlider>
        <ContainerColumn>
          <ContainerInfoRow>
            <Valor>
              <ValorTitle>Valor</ValorTitle>
              <p style={{ margin: 0 }}>R$ {draw?.value}</p>
            </Valor>
            <DateDraw>
              <DateTitle>Sorteio</DateTitle>
              <p style={{ margin: 0 }}>
                {day}/{month}/{year}
              </p>
            </DateDraw>
          </ContainerInfoRow>
          <Description>
            {" "}
            <ReactMarkdown source={draw?.description} escapeHtml={true} />
          </Description>
          <Timer>
            <p>{showTime}</p>
          </Timer>
        </ContainerColumn>
      </ContainerRow>
      <ContainerRow style={{ justifyContent: "center" }}>
        <CardProcess>
          <CardImg src={`${URL}/passo-1.png`} />
          <Subtitle>Escolha uma Rifa</Subtitle>
          <p style={{ width: "60%" }}>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </p>
        </CardProcess>
        <CardProcess>
          <CardImg src={`${URL}/passo-2.png`} />
          <Subtitle>Selecione os números</Subtitle>
          <p style={{ width: "60%" }}>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </p>
        </CardProcess>
        <CardProcess>
          <CardImg src={`${URL}/passo-3.png`} />
          <Subtitle>Faça o pagamento</Subtitle>
          <p style={{ width: "60%" }}>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </p>
        </CardProcess>
        <CardProcess>
          <CardImg src={`${URL}/passo-4.png`} />
          <Subtitle>Aguarde o sorteio</Subtitle>
          <p style={{ width: "60%" }}>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </p>
        </CardProcess>
      </ContainerRow>
      <ContainerQuotas>
        <QuotasHeader>
          <h1>Cotas</h1>
          <Subtitle>Clique e selecione quantas cotas você quiser!</Subtitle>
        </QuotasHeader>
        <ContainerButtonsFilter>
          <div>
            <ButtonsFilter color={"gray"}>Livre</ButtonsFilter>
            <ButtonsFilter color={"blue"}>Reservados</ButtonsFilter>
            <ButtonsFilter color={"green"}>Pagos</ButtonsFilter>
          </div>
        </ContainerButtonsFilter>
        <ContinerQuotasShow>
          {quotasVerifyDraw.map((quota) => {
            let colorValue = "green";
            if (quota?.status == "resevation") {
              colorValue = "blue";
            } else if (quota?.status == "sold") {
              colorValue = "green";
            } else if (quota?.status == "free") {
              colorValue = "gray";
            }
            return (
              <ButtonQuota
                className={quota?.colorValue}
                onClick={() =>
                  handleSetQuotasSelected(quota?.number, quota?.status)
                }
                color={colorValue}
              >
                {quota?.number}
              </ButtonQuota>
            );
          })}
        </ContinerQuotasShow>
      </ContainerQuotas>
      <ContainerConfirmation length={quotasSelected.length}>
        <div style={{ width: "400px" }}>
          {quotasSelected.map((quota) => (
            <ButtonQuota
              color={"blue"}
              onClick={() => handleSetQuotasExcludeSelected(quota)}
            >
              {quota}
            </ButtonQuota>
          ))}
        </div>
        <div>
          <p>
            {quotasSelected.length}x {draw?.value} = R${" "}
            {quotasSelected.length * parseInt(`${draw?.value}`)}{" "}
          </p>
          <ButtonConfirmation onClick={sendApi}>Finalizar</ButtonConfirmation>
        </div>
      </ContainerConfirmation>
    </Container>
  );
}
