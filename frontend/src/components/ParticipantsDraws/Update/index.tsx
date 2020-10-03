import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import api from "../../../services/api";
import { IDraw, IParticipants_Draw, IUser } from "../../../types";
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

  const [draw_id, setDraw_id] = React.useState<number | undefined>(1);
  const [draws, setDraws] = React.useState<IDraw[]>([]);
  const [participants, setParticipants] = useState<IParticipants_Draw[]>([]);
  const [participant_id, setParticipan_id] = useState<number | undefined>();
  const [draw_quotas_draw_quota_id, setDraw_Quotas_Draw_Quota_Id] = useState<
    number | undefined
  >();
  const [users_user_id, setUsers_User_Id] = useState<number | undefined>();
  const [users, setUsers] = useState<IUser[]>([]);
  const [draw_idOpen, setDraw_idOpen] = React.useState(false);
  const [participant_idOpen, setParticipant_idOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [status, setStatus] = useState<string>();
  const [response, setResponse] = React.useState<JSX.Element>();

  const handleChangeDraw = (id: number | undefined, index: number) => {
    setDraw_id(id);
  };
  const handleChangeParticipant = (id: number | undefined, index: number) => {
    setParticipan_id(id);
    setUsers_User_Id(participants[index].users_user_id);
    console.log(participants[index].users_user_id);
    setDraw_Quotas_Draw_Quota_Id(participants[index].draw_quota_id);
  };

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/draws");

      setDraws(data);
    }
    getDraws();
  }, []);
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get<IParticipants_Draw[]>(
        "/participants_draws"
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
        `/join_participants_draws_quotas?draw_id=${draw_id}`
      );

      setParticipants(data[0]);
    }
    getParticipants();
  }, [draw_id]);

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

  const handleCloseStatus = () => {
    setStatusOpen(false);
  };

  const handleOpenStatus = () => {
    setStatusOpen(true);
  };

  async function sendApi() {
    const payload = {
      participant_id,
      draw_quotas_draw_quota_id,
      users_user_id,
      draws_draw_id: draw_id,
      status,
    };

    const {data } = await api.put("/participant_draw",payload)

    if (data === "Sucesso em atualizar o participante") {
      setResponse(<Alert severity="success"  >{data}</Alert>)
    }else if (data === "Falhou em atualizar o participante") {
      setResponse(<Alert severity="error" >{data}</Alert>)
    }

    console.log(data)
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
                {`${participant.number}-${participant.status === "sold"?"Pago":""}${participant.status === "resevation"?"Reservado":""}${participant.status === "free"?"Livre":""}`}
              </MenuItem>
            ) : (
              <div key={Math.random() * 9999} style={{ display: "none" }}></div>
            )
          )}
        </Select>
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={statusOpen}
          onClose={handleCloseStatus}
          onOpen={handleOpenStatus}
          value={status}
          required={true}
        >
          <MenuItem key={1} value="sold" onClick={() => setStatus("sold")}>
            Pago
          </MenuItem>
          <MenuItem
            key={2}
            value="resevation"
            onClick={() => setStatus("resevation")}
          >
            Reservado
          </MenuItem>
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
          Atualizar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
