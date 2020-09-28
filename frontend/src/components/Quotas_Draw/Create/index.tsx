import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import api from "../../../services/api";
import { Button, FormControl } from "@material-ui/core";

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

  const [number, setNumber] = React.useState("");

  const [response, setResponse] = React.useState<JSX.Element>();

  const handleChangeNumber = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNumber(event.target.value as string);
  };

  async function sendApi() {
    const payload = {
      number,
    };

    const { data } = await api.post("/draw_quota", payload);
    if (data === "Falhou em criar a cota") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em criar a cota") {
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
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Número da Cota"
          value={number}
          onChange={handleChangeNumber}
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
