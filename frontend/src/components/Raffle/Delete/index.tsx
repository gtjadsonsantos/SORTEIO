import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import api,{URL} from "../../../services/api";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { IRaffles } from "../../../types";

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

  const [raffle_id, setRaffle_id] = React.useState<number>();
  const [raffles, setRaffles] = React.useState<IRaffles[]>([]);

  const [response, setResponse] = React.useState<JSX.Element>();
  const [raffle_idOpen, setRaffle_idOpen] = React.useState(false);

  const handleChangeDraw = (id: number | undefined, index: number) => {
    setRaffle_id(id);
  };

  async function sendApi() {
    const response = await fetch(URL + "/raffle", {
      body: JSON.stringify({
        raffle_id: raffle_id,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      method: "DELETE",
    });
    const data = await response.json();

    if (data === "Falhou em deletar a rifa") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em deletar a rifa") {
      setResponse(<Alert severity="success">{data}</Alert>);
    }
  }

  const handleCloseRaffle_id = () => {
    setRaffle_idOpen(false);
  };

  const handleOpenRaffle_id = () => {
    setRaffle_idOpen(true);
  };

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/raffles");

      setRaffles(data);
    }
    getDraws();
  }, []);

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
              onClick={() => handleChangeDraw(raffle.raffle_id, index)}
            >
              {raffle.title}
            </MenuItem>
          ))}
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
