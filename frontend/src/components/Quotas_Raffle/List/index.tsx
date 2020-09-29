import React, { useEffect } from "react";
import api from "../../../services/api";
import { IQuotas_Raffle } from "../../../types";
import { Container, Quota } from "./styles";

export default function List() {
  const [raffles_quotas, setRaffles_Quotas] = React.useState<IQuotas_Raffle[]>([]);

  useEffect(() => {
    async function getRaffle_Quotas() {
      const { data } = await api.get("/quotas_rafles");
      setRaffles_Quotas(data);
    }
    getRaffle_Quotas();
  }, []);

  return (
    <Container>
      {raffles_quotas.map((quota) => (
        <Quota>{quota.number}</Quota>
      ))}
    </Container>
  );
}
