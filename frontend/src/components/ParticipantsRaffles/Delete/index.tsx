import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import api, { URL } from "../../../services/api";
import { IRaffles, IParticipants_Ruffle } from "../../../types";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(2),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);
export default function Update() {
  const classes = useStyles();

  const [raffle_id, setRaffle_id] = React.useState<number | undefined>(1);
  const [raffles, setRaffles] = React.useState<IRaffles[]>([]);
  const [participants, setParticipants] = useState<IParticipants_Ruffle[]>([]);
  const [participant_id, setParticipan_id] = useState<number | undefined>();
  const [
    quotas_raffle_quota_raffle_id,
    setRaffle_Quotas_Raffle_Quota_Id,
  ] = useState<number | undefined>();
  const [users_user_id, setUsers_User_Id] = useState<number | undefined>();
  const [raffle_idOpen, setRaffle_idOpen] = React.useState(false);
  const [participant_idOpen, setParticipant_idOpen] = useState(false);
  const [response, setResponse] = React.useState<JSX.Element>();

  const handleChangeRaffle = (id: number | undefined, index: number) => {
    setRaffle_id(id);
  };
  const handleChangeParticipant = (id: number | undefined, index: number) => {
    setParticipan_id(id);
    setUsers_User_Id(participants[index].users_user_id);
    setRaffle_Quotas_Raffle_Quota_Id(participants[index].quota_raffle_id);
  };

  useEffect(() => {
    async function getRaffles() {
      const { data } = await api.get("/raffles");

      setRaffles(data);
    }
    getRaffles();
  }, []);
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get<IParticipants_Ruffle[]>(
        "/participants_raffles"
      );

      setUsers_User_Id(
        data.find(
          (participant) => participant.participant_id === participant_id
        )?.users_user_id
      );
    }
    getUsers();
  }, [participant_id]);

  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_raffles_quotas?raffle_id=${raffle_id}`
      );

      setParticipants(data[0]);
    }
    getParticipants();
  }, [raffle_id]);

  const handleCloseRaffle_id = () => {
    setRaffle_idOpen(false);
  };

  const handleOpenRaffle_id = () => {
    setRaffle_idOpen(true);
  };

  const handleCloseParticipant_id = () => {
    setParticipant_idOpen(false);
  };

  const handleOpenParticipant_id = () => {
    setParticipant_idOpen(true);
  };

  async function sendApi() {
    const response = await fetch(URL + "/participant_raffle", {
      body: JSON.stringify({
        participant_id,
        quotas_raffle_quota_raffle_id,
        users_user_id,
        raffles_raffle_id: raffle_id,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      method: "DELETE",
    });
    const data = await response.json();

    if (data === "Falhou em deletar o participante") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em deletar o participante") {
      setResponse(<Alert severity="success">{data}</Alert>);
    }
  }

  return (
    <form
      className={classes.root}
      noValidate={false}
      onSubmit={(event) => event.preventDefault()}
      autoComplete="off"
    >
      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Rifa</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={raffle_idOpen}
          onClose={handleCloseRaffle_id}
          onOpen={handleOpenRaffle_id}
          value={raffle_id}
          required={true}
        >
          {raffles.map((raffle, index) => (
            <MenuItem
              key={raffle.raffle_id}
              value={raffle.raffle_id}
              onClick={() => handleChangeRaffle(raffle.raffle_id, index)}
            >
              {raffle.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">
          Participantes
        </InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={participant_idOpen}
          onClose={handleCloseParticipant_id}
          onOpen={handleOpenParticipant_id}
          value={participant_id}
          required={true}
        >
          {participants.map((participant, index) =>
            participant.raffle_id === raffle_id ? (
              <MenuItem
                key={Math.random() * 9999}
                value={participant.participant_id}
                onClick={() =>
                  handleChangeParticipant(participant.participant_id, index)
                }
              >
                {`${participant.number}-${
                  participant.status === "sold" ? "Pago" : ""
                }${participant.status === "resevation" ? "Reservado" : ""}${
                  participant.status === "free" ? "Livre" : ""
                }`}
              </MenuItem>
            ) : (
              <div key={Math.random() * 9999} style={{ display: "none" }}></div>
            )
          )}
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendApi}
          style={{ width: "200px" }}
          className={classes.button}
        >
          Deletar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
