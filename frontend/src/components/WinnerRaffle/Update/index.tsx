import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import FileBase64 from "react-file-base64";
import api from "../../../services/api";
import { IRaffles, IParticipants_Ruffle,IWinner_Raffle } from "../../../types";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
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
  const [raffles, setRaffles] = useState<IRaffles[]>([]);
  const [raffle_id, setRaffle_Id] = useState<number | undefined>(1);
  const [participants, setParticipants] = useState<IParticipants_Ruffle[]>([]);
  const [participant_id, setParticiapant_id] = useState<number | undefined>();
  const [winnerRaffle_id, setWinnerRaffle_id] = useState<number | undefined>();
  const [winnerRaffle, setWinnerRaffle] = useState<IWinner_Raffle[]>([]);
  const [image, setImage] = useState<string>();
  const [video, setVideo] = useState<string>();
  const [response, setResponse] = React.useState<JSX.Element>();
  const [raffle_idOpen, setRaffle_idOpen] = React.useState(false);
  const [participant_idOpen, setParticipant_idOpen] = useState(false);
  const [winnerRaffle_idOpen, setWinnerRaffle_idOpen] = useState(false);

  const handleChangeRaffle = (id: number | undefined, index: number) => {
    setRaffle_Id(id);
  };

  const handleChangeParticipant = (id: number | undefined, index: number) => {
    setParticiapant_id(id);
  };

  const handleChangeWinnerDraw = (id: number | undefined, index: number) => {
    setWinnerRaffle_id(id);
  };

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/raffles");

      setRaffles(data);
    }
    getDraws();
  }, []);
  useEffect(() => {
    async function getWinnerRaffles() {
      const { data } = await api.get("/winners_raffles");

      setWinnerRaffle(data);
    }
    getWinnerRaffles();
  }, []);

  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_raffles_quotas?raffle_id=${raffle_id}`
      );

      setParticipants(data[0]);
    }
    getParticipants();
  }, [raffle_id]);

  const handlChangeDataImage = (file: any) => {
    setImage(file.base64);
  };

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

  const handleCloseWinnerRaffle_id = () => {
    setWinnerRaffle_idOpen(false);
  };

  const handleOpenWinnerRaffle_id = () => {
    setWinnerRaffle_idOpen(true);
  };

  async function sendApi() {
    const payload = {
      image: image,
      video: video,
      winner_id:winnerRaffle_id,
      participants_raffle_participant_id: participant_id,
    };
    const { data } = await api.put("/winner_raffle", payload);

    if (data === "Sucesso em atualizar ganhador") {
      setResponse(<Alert severity="success">{data}</Alert>);
    } else if (data === "Falhou em atualizar o ganhador") {
      setResponse(<Alert severity="error">{data}</Alert>);
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
        <InputLabel id="demo-controlled-open-select-label">Rifas</InputLabel>
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
      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">
          Ganhadores
        </InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={winnerRaffle_idOpen}
          onClose={handleCloseWinnerRaffle_id}
          onOpen={handleOpenWinnerRaffle_id}
          value={winnerRaffle_id}
          required={true}
        >
          {winnerRaffle.map((winner, index) =>
            winner.participants_raffle_participant_id === participant_id ? (
              <MenuItem
                key={Math.random() * 9999}
                value={winnerRaffle_id}
                onClick={() =>
                  handleChangeWinnerDraw(
                    winner.winner_id,
                    index
                  )
                }
              >
                {`ID GANHADOR: ${winner.winner_id}- ID PARTICIPANTE ${winner.participants_raffle_participant_id}`}
              </MenuItem>
            ) : (
              <div key={Math.random() * 9999} style={{ display: "none" }}></div>
            )
          )}
        </Select>
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <FileBase64 multiple={false} onDone={handlChangeDataImage} />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          onChange={(element) => setVideo(element.target.value)}
          value={video}
          id="outlined-basic"
          label="Youtube(URL)"
        />
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
          Atualizar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
