import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import Select from "@material-ui/core/Select";
import api from "../../../services/api";
import {
  IDraw,
  Ijoin_winners_participants_users_quotas_draw,
} from "../../../types";
import { Container, Caption, ContainerPrint, GlobalCSSPRINT } from "./styles";
import Printer, { print } from "react-pdf-print";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

const ids = ["1"];

export default function Draws() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [draws, setDraws] = useState<IDraw[]>([]);
  const [participantsDraw, setParticipantsDraw] = useState<
    Ijoin_winners_participants_users_quotas_draw[]
  >([]);
  const [draw_id, setDraw_id] = useState<number>(1);

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get(`/draws`);
      setDraws(data);
    }
    getDraws();
  }, [draw_id]);

  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_draws_quotas?draw_id=${draw_id}`
      );
      setParticipantsDraw(data[0]);
    }
    getParticipants();
  }, [draw_id]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDraw_id(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <GlobalCSSPRINT />
      <Container>
        <FormControl id="draw-select" className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Sorteio
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={draw_id}
            onChange={handleChange}
          >
            {draws.map((draw) => (
              <MenuItem key={draw.draw_id} value={draw.draw_id}>
                {draw.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <ContainerPrint>
          <Printer id="print">
            <div id="page" style={{ width: "100%" }}>
              <table id={"1"}>
                <Caption>RELATÓRIO DE SORTEIOS | PILOTANDO PRÊMIOS </Caption>
                <tr>
                  <th>NOME</th>
                  <th>COTA</th>
                </tr>
                {participantsDraw.map((participant) => (
                  <tr>
                    <td>{participant.name}</td>
                    <td>{participant.number}</td>
                  </tr>
                ))}
              </table>
            </div>
          </Printer>
        </ContainerPrint>
        <Button
         id="button-print"
          fullWidth={true}
          variant="contained"
          color="secondary"
          onClick={() => window.print()}
          value="Stampa"
        >
          Gerar Pdf
        </Button>
      </Container>
    </>
  );
}
