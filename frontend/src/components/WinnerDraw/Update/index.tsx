import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import FileBase64 from "react-file-base64";
import api from "../../../services/api";
import { IDraw, IParticipants_Draw, IWinner_Draw } from "../../../types";
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
  const [draws, setDraws] = useState<IDraw[]>([]);
  const [draw_id, setDraw_Id] = useState<number | undefined>(1);
  const [participants, setParticipants] = useState<IParticipants_Draw[]>([]);
  const [participant_id, setParticiapant_id] = useState<number | undefined>();
  const [winnerDraw_id, setWinner_id] = useState<number | undefined>();
  const [winnerDraw, setWinnerDraws] = useState<IWinner_Draw[]>([]);
  const [image, setImage] = useState<string>();
  const [video, setVideo] = useState<string>();
  const [response, setResponse] = React.useState<JSX.Element>();
  const [draw_idOpen, setDraw_idOpen] = React.useState(false);
  const [participant_idOpen, setParticipant_idOpen] = useState(false);
  const [winnerDraw_idOpen, setWinnerDraw_idOpen] = useState(false);

  const handleChangeDraw = (id: number | undefined, index: number) => {
    setDraw_Id(id);
  };

  const handleChangeParticipant = (id: number | undefined, index: number) => {
    setParticiapant_id(id);
  };

  const handleChangeWinnerDraw = (id: number | undefined, index: number) => {
    setWinner_id(id);
  };

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/draws");

      setDraws(data);
    }
    getDraws();
  }, []);
  useEffect(() => {
    async function getWinnerDraws() {
      const { data } = await api.get("/winners_draws");

      setWinnerDraws(data);
    }
    getWinnerDraws();
  }, []);

  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_draws_quotas?draw_id=${draw_id}`
      );

      setParticipants(data[0]);
    }
    getParticipants();
  }, [draw_id]);

  const handlChangeDataImage = (file: any) => {
    setImage(file.base64);
  };

  const handleCloseDraw_id = () => {
    setDraw_idOpen(false);
  };

  const handleOpenDraw_id = () => {
    setDraw_idOpen(true);
  };

  const handleCloseParticipant_id = () => {
    setParticipant_idOpen(false);
  };

  const handleOpenParticipant_id = () => {
    setParticipant_idOpen(true);
  };

  const handleCloseWinnerDraw_id = () => {
    setWinnerDraw_idOpen(false);
  };

  const handleOpenWinnerDraw_id = () => {
    setWinnerDraw_idOpen(true);
  };

  async function sendApi() {
    const payload = {
      image: image,
      video: video,
      winner_id:winnerDraw_id,
      participants_draw_participant_id: participant_id,
    };
    const { data } = await api.put("/winner_draw", payload);

    if (data === "Sucesso em atualizar o ganhador") {
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
        <InputLabel id="demo-controlled-open-select-label">Sorteio</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={draw_idOpen}
          onClose={handleCloseDraw_id}
          onOpen={handleOpenDraw_id}
          value={draw_id}
          required={true}
        >
          {draws.map((draw, index) => (
            <MenuItem
              key={draw.draw_id}
              value={draw.draw_id}
              onClick={() => handleChangeDraw(draw.draw_id, index)}
            >
              {draw.title}
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
            participant.draw_id === draw_id ? (
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
          open={winnerDraw_idOpen}
          onClose={handleCloseWinnerDraw_id}
          onOpen={handleOpenWinnerDraw_id}
          value={winnerDraw_id}
          required={true}
        >
          {winnerDraw.map((winner, index) =>
            winner.participants_draw_participant_id === participant_id ? (
              <MenuItem
                key={Math.random() * 9999}
                value={winnerDraw_id}
                onClick={() =>
                  handleChangeWinnerDraw(
                    winner.winner_id,
                    index
                  )
                }
              >
                {`ID GANHADOR: ${winner.winner_id}- ID PARTICIPANTE ${winner.participants_draw_participant_id}`}
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
