import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  IBusiness,
  Ijoin_raffles_participants_users_quotas_raffles_by_user_id,
  Ijoin_winners_participants_users_quotas_draw_by_user_id,
} from "../../types";
import { Container, CardItem, Title, SubTitle, RowText } from "./styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import BanksAccount from "../BanksAccount/List";
export default function MyShopping() {
  const [participantsRaffles, setParticipantsRaffles] = useState<
    Ijoin_raffles_participants_users_quotas_raffles_by_user_id[]
  >([]);
  const [participantsDraws, setParticipantsDraws] = useState<
    Ijoin_winners_participants_users_quotas_draw_by_user_id[]
  >([]);
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const [business, setBusiness] = useState<IBusiness>();

  useEffect(() => {
    async function getBusiness() {
      const { data } = await api.get("/business");
      setBusiness(data[0]);
    }
    getBusiness();
  }, []);
  useEffect(() => {
    async function getParticipantsRaffles() {
      const { data } = await api.get(
        `/join_participants_raffles_quotas/${
          JSON.parse(`${sessionStorage.getItem("data")}`)?.user_id
        }`
      );
      setParticipantsRaffles(data[0]);
    }
    getParticipantsRaffles();
  }, []);
  useEffect(() => {
    async function getParticipantsDraws() {
      const { data } = await api.get(
        `/join_participants_draws_quotas/${
          JSON.parse(`${sessionStorage.getItem("data")}`)?.user_id
        }`
      );
      setParticipantsDraws(data[0]);
    }
    getParticipantsDraws();
  }, []);
  console.log(business);
  return (
    <Container>
      {participantsDraws.map((participant) => (
        <CardItem>
          <Title>{participant.title}</Title>
          <SubTitle>{participant.subtitle}</SubTitle>
          <RowText>
            Resv. em{" "}
            {`${new Date(`${participant.created_at}`).getUTCDate()}/${
              months[new Date(`${participant.created_at}`).getUTCMonth()]
            }/${new Date(`${participant.created_at}`).getUTCFullYear()}`}
          </RowText>
          <RowText>
            Situação: {participant.status === "resevation" ? "Reservado" : ""}
            {participant.status === "sold" ? "Pagamento Confirmado" : ""}
          </RowText>
          <RowText>Cota:{participant.number}</RowText>
          <RowText>#SORTEIO #BOA SORTE </RowText>
          <RowText>
            <a
              href={`https://api.whatsapp.com/send?phone=${business?.phone}&text=Olá pilotando prêmios, segue a cota ${participant.number} do sorteio *${participant.title}*`}
            >
              <WhatsAppIcon style={{ color: "green" }} />
            </a>
          </RowText>
        </CardItem>
      ))}
      {participantsRaffles.map((participant) => (
        <CardItem>
          <Title>{participant.title}</Title>
          <SubTitle>{participant.subtitle}</SubTitle>
          <RowText>
            Resv. em{" "}
            {`${new Date(`${participant.created_at}`).getUTCDate()}/${
              months[new Date(`${participant.created_at}`).getUTCMonth()]
            }/${new Date(`${participant.created_at}`).getUTCFullYear()}`}
          </RowText>
          <RowText>
            Situação: {participant.status === "resevation" ? "Reservado" : ""}
            {participant.status === "sold" ? "Pagamento Confirmado" : ""}
          </RowText>
          <RowText>Cota:{participant.number}</RowText>
          <RowText>#RIFAS #BOA SORTE</RowText>
          <RowText>
            <a
              href={`https://api.whatsapp.com/send?phone=${business?.phone}&text=Olá pilotando prêmios, segue a cota ${participant.number} da rifa *${participant.title}*`}
            >
              <WhatsAppIcon style={{ color: "green" }} />
            </a>
          </RowText>
        </CardItem>
      ))}
      <BanksAccount />
    </Container>
  );
}
