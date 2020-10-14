import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import FileBase64 from "react-file-base64";
import api from "../../../services/api";
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
export default function Create() {
  const classes = useStyles();
  const [raffles, setRaffles] = useState<IRaffles[]>([]);
  const [raffle_id, setRaffle_Id] = useState<number | undefined>(1);
  const [participants, setParticipants] = useState<IParticipants_Ruffle[]>([]);
  const [participant_id, setParticiapant_id] = useState<number>();
  const [image, setImage] = useState<string>();
  const [video, setVideo] = useState<string>(" ");
  const [response, setResponse] = React.useState<JSX.Element>();
  const [raffle_idOpen, setRaffle_idOpen] = React.useState(false);
  const [participant_idOpen, setParticipant_idOpen] = useState(false);

  const handleChangeRaffle = (id: number | undefined, index: number) => {
    setRaffle_Id(id);
  };

  const handleChangeParticipant = (id: number | undefined, index: number) => {
    setParticiapant_id(id);
  };
  useEffect(() => {
    async function getRaffles() {
      const { data } = await api.get("/raffles");

      setRaffles(data);
    }
    getRaffles();
  }, []);
  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_raffles_quotas?raffle_id=${raffle_id}`
      );
      console.log(data[0])
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
  async function sendApi() {
    const payload = {
      image: image,
      video: video,
      participants_raffle_participant_id: participant_id,
    };
    const { data } = await api.post("/winner_raffle", payload);

    if (data === "Sucesso em criar ganhador") {
      setResponse(<Alert severity="success">{data}</Alert>);
    } else if (data === "Falhou em criar o ganhador") {
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
        <FileBase64 multiple={false} onDone={handlChangeDataImage} />
      </FormControl>
      <FormControl fullWidth required={false}  className={classes.margin}>
        <TextField
          required={false}
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
          Cadastar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
