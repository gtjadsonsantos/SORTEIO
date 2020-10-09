import React, { useEffect, useState } from "react";
import api, { URL } from "../../../services/api";
import {
  IQuotas_Raffle,
  IRaffles,
  IImage,
  IParticipants_Ruffle,
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
  ContainerRowInfo,
  ImageSlider
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function MoadalRaffle() {
  const [quotasRaffle, setQuotasRaffle] = useState<IQuotas_Raffle[]>([]);
  const [quotasVerifyRaffle, setQuotasVerifyRaffle] = useState<any>([]);
  const [participants, setParticipants] = useState<IParticipants_Ruffle[]>([]);
  const [raffle, setRaffle] = useState<IRaffles>();
  const [images, setImages] = React.useState<IImage[]>([]);
  const [raffle_id, setRaffle_Id] = useState<number>();
  const [day, setDay] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [showTime, setShowTime] = useState<string>();
  const [quotasSelected, setQuotasSelected] = useState<string[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [free, setFree] = useState(true);
  const [resevation, setResevation] = useState(true);
  const [sold, setSold] = useState(true);

  useEffect(() => {
    async function getRaffle_Quotas() {
      const { data } = await api.get("/quotas_rafles");
      setQuotasRaffle(data);
    }
    getRaffle_Quotas();
  }, []);

  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_raffles_quotas?raffle_id=${sessionStorage.getItem(
          "raffle_id"
        )}`
      );
      console.log(data[0]);
      setParticipants(data[0]);
    }
    getParticipants();
  }, []);
  useEffect(() => {
    const dateNew: any = new Date(`${raffle?.date_raffle}`);
    const dateResult = TimerCounter(dateNew);
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);

      if (
        Math.sign(dateResult.days) === -1 &&
        Math.sign(dateResult.hours) === -1 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      } else if (
        Math.sign(dateResult.days) === -1 &&
        Math.sign(dateResult.hours) === 0 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      } else if (
        Math.sign(dateResult.days) === -1 &&
        Math.sign(dateResult.hours) === -1 &&
        Math.sign(dateResult.minutes) === 0
      ) {
        setShowTime(`Encerrado`);
      } else if (
        Math.sign(dateResult.days) === 0 &&
        Math.sign(dateResult.hours) === -1 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      } else if (
        Math.sign(dateResult.days) === 0 &&
        Math.sign(dateResult.hours) === 0 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      } else if (
        Math.sign(dateResult.days) === NaN &&
        Math.sign(dateResult.hours) === NaN &&
        Math.sign(dateResult.minutes) === NaN
      ) {
        setShowTime(`Encerrado`);
      } else {
        setShowTime(
          `Dias: ${dateResult.days} Horas: ${dateResult.hours} Minutos: ${dateResult.minutes}`
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    async function getRaffles() {
      const { data } = await api.get(
        `/raffle/${sessionStorage.getItem("raffle_id")}`
      );

      const id: any = sessionStorage.getItem("raffle_id");
      setRaffle_Id(parseInt(id));
      setRaffle(data[0]);

      const date = new Date(data[0].date_raffle);
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
    getRaffles();
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
      const render = quotasRaffle.map((quota_raffle) => {
        let response;

        if (participants.length === 0) {
          response = {
            status: "free",
            number: quota_raffle.number,
            quota_raffle_id: quota_raffle.quota_raffle_id,
            raffle_id,
          };
        } else {
          participants.map((participant_item) => {
            if (
              participant_item.quota_raffle_id === quota_raffle.quota_raffle_id
            ) {
              response = { ...participant_item };
            }
          });
        }
        if (response === undefined) {
          response = {
            status: "free",
            number: quota_raffle.number,
            quota_raffle_id: quota_raffle.quota_raffle_id,
            raffle_id,
          };
        }
        return response;
      });

      setQuotasVerifyRaffle(render);
    }
    renderQuotas();
  }, [quotasRaffle, participants]);
  const handleSetQuotasSelected = (number: string, status: string) => {
    if (status === "free") {
      const verify = quotasSelected.filter((quota) => quota === number);

      if (verify.length === 0) {
        setQuotasSelected([...quotasSelected, number]);
      }
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
          quotas_raffle_quota_raffle_id: parseInt(
            `${
              quotasRaffle.find((quota) => quota.number === item)
                ?.quota_raffle_id
            }`
          ),
          raffles_raffle_id: raffle_id,
        };

        const { data } = await api.post("/participant_raffle", payload);
        console.log(data);
      });
    }
  }

  const handeHandleQuotasFree = () => {
    const display = free === true ? "block" : "none";
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
      ".gray"
    );
    buttons.forEach((element) => {
      element.style.display = display;
    });
    setFree(!free);
  };

  const handeHandleQuotasResevation = () => {
    const display = resevation === true ? "block" : "none";
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
      ".blue"
    );
    buttons.forEach((element) => {
      element.style.display = display;
    });
    setResevation(!resevation);
  };
  const handeHandleQuotasGreen = () => {
    const display = sold === true ? "block" : "none";
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
      ".green"
    );
    buttons.forEach((element) => {
      element.style.display = display;
    });
    setSold(!sold);
  };
  return (
    <Container>
      <Header>
        <Title>{raffle?.title}</Title>
        <Subtitle>{raffle?.subtitle}</Subtitle>
      </Header>
      <ContainerRow>
        <ContainerSlider>
          <ImageSlider
            src={raffle?.image}
          />
        </ContainerSlider>
        <ContainerColumn>
          <ContainerInfoRow>
            <Valor>
              <ValorTitle>Valor</ValorTitle>
              <p style={{ margin: 0 }}>R$ {raffle?.value}</p>
            </Valor>
            <DateDraw>
              <DateTitle>Rifa</DateTitle>
              <p style={{ margin: 0 }}>
                {day}/{month}/{year}
              </p>
            </DateDraw>
          </ContainerInfoRow>
          <Description>
            {" "}
            <ReactMarkdown source={raffle?.description} escapeHtml={true} />
          </Description>
          <Timer>
            <p>{showTime}</p>
          </Timer>
        </ContainerColumn>
      </ContainerRow>
      <ContainerRowInfo style={{ justifyContent: "center" }}>
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
            Escolha quantos quiser! Quanto mais, mais chances de ganhar.
          </p>
        </CardProcess>
        <CardProcess>
          <CardImg src={`${URL}/passo-3.png`} />
          <Subtitle>Faça o pagamento</Subtitle>
          <p style={{ width: "60%" }}>
            Escolha uma das formas de pagamento disponíveis.
          </p>
        </CardProcess>
        <CardProcess>
          <CardImg src={`${URL}/passo-4.png`} />
          <Subtitle>Aguarde o sorteio</Subtitle>
          <p style={{ width: "60%" }}>
            Agora é aguardar o sorteio pela Loteria Federal e boa sorte!
          </p>
        </CardProcess>
      </ContainerRowInfo>
      <ContainerQuotas>
        <QuotasHeader>
          <h1>Cotas</h1>
          <Subtitle>Clique e selecione quantas cotas você quiser!</Subtitle>
        </QuotasHeader>
        <ContainerButtonsFilter>
          <div>
            <ButtonsFilter color={"gray"} onClick={handeHandleQuotasFree}>
              Livre
            </ButtonsFilter>
            <ButtonsFilter color={"blue"} onClick={handeHandleQuotasResevation}>
              Reservados
            </ButtonsFilter>
            <ButtonsFilter color={"green"} onClick={handeHandleQuotasGreen}>
              Pagos
            </ButtonsFilter>
          </div>
        </ContainerButtonsFilter>
        <ContinerQuotasShow>
          {quotasVerifyRaffle.map((quota) => {
            let colorValue = "green";
            if (quota?.status === "resevation") {
              colorValue = "blue";
            } else if (quota?.status === "sold") {
              colorValue = "green";
            } else if (quota?.status === "free") {
              colorValue = "gray";
            }
            return (
              <ButtonQuota
                className={colorValue}
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
            {quotasSelected.length}x {raffle?.value} = R${" "}
            {quotasSelected.length * parseInt(`${raffle?.value}`)}{" "}
          </p>
          <ButtonConfirmation onClick={sendApi}>Finalizar</ButtonConfirmation>
        </div>
      </ContainerConfirmation>
    </Container>
  );
}
