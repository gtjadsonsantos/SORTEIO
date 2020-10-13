import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import Select from "@material-ui/core/Select";
import api from "../../../services/api";
import {
  Ijoin_raffles_participants_users_quotas_raffles,
  IRaffles,
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

export default function Raffles() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [raffles, setRaffles] = useState<IRaffles[]>([]);
  const [participantsDraw, setParticipantsDraw] = useState<
    Ijoin_raffles_participants_users_quotas_raffles[]
  >([]);
  const [raffle_id, setRaffle_id] = useState<number>(1);

  useEffect(() => {
    async function getRaffles() {
      const { data } = await api.get(`/raffles`);
      setRaffles(data);
    }
    getRaffles();
  }, [raffle_id]);

  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_raffles_quotas?raffle_id=${raffle_id}`
      );
      setParticipantsDraw(data[0]);
    }
    getParticipants();
  }, [raffle_id]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRaffle_id(event.target.value as number);
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
        <FormControl id="raffle-select" className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Rifas</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={raffle_id}
            onChange={handleChange}
          >
            {raffles.map((raffle) => (
              <MenuItem key={raffle.raffle_id} value={raffle.raffle_id}>
                {raffle.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <ContainerPrint>
          <Printer id="print">
            <div id="page" style={{ width: "100%" }}>
              <table id={ids[0]}>
                <Caption>RELATÓRIO DE RIFAS | PILOTANDO PRÊMIOS </Caption>
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
