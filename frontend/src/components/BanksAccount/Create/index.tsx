import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FileBase64 from "react-file-base64";
import Alert from "@material-ui/lab/Alert";
import api from "../../../services/api";
import { Button, FormControl, InputLabel } from "@material-ui/core";

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
  const [cnpj, setCnpj] = useState<string | undefined>();
  const [nameBank, setNameBank] = useState<string | undefined>();
  const [numberAccount, setNumberAccount] = useState<string | undefined>();
  const [cpf, setCpf] = useState<string | undefined>();
  const [agency, setAgency] = useState<string | undefined>();
  const [image, setImage] = useState<string | undefined>();
  const [response, setResponse] = React.useState<JSX.Element>();

  const handlChangeImagem = (file: any) => {
    setImage(file.base64);
  };

  async function sendApi() {
    const payload = {
      cnpj,
      image,
      cpf,
      agency,
      name: nameBank,
    };

    const { data } = await api.post("/bank_account", payload);

    if (data === "Falhou em criar banco") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em criar banco") {
      setResponse(<Alert severity="success">{data}</Alert>);
    } else if (data === "Revise os dados de cpf e cnpj") {
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
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Nome"
          value={nameBank}
          onChange={(element) => setNameBank(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Cnpj"
          value={cnpj}
          onChange={(element) => setCnpj(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Cpf"
          value={cpf}
          onChange={(element) => setCpf(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Agência"
          value={agency}
          onChange={(element) => setCnpj(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Imagem</InputLabel>
        <FileBase64 multiple={false} onDone={handlChangeImagem} />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Número da Conta"
          value={numberAccount}
          onChange={(element) => setNumberAccount(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "200px" }}
          onClick={sendApi}
          className={classes.button}
        >
          Cadastar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
