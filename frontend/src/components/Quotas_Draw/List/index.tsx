import React, { useEffect } from "react";
import api from "../../../services/api";
import { IDraw_QuotasVO } from "../../../types";
import { Container, Quota } from "./styles";

export default function Update() {
  const [draw_quotas, setDraw_Quotas] = React.useState<IDraw_QuotasVO[]>([]);

  useEffect(() => {
    async function getDraw_Quotas() {
      const { data } = await api.get("/draw_quotas");
      setDraw_Quotas(data);
    }
    getDraw_Quotas();
  }, []);

  return (
    <Container>
      {draw_quotas.map((quota) => (
        <Quota>{quota.number}</Quota>
      ))}
    </Container>
  );
}
