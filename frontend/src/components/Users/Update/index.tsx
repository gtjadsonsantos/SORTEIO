import React, { useState,useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FileBase64 from "react-file-base64";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import api from "../../../services/api";
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

  const [user_id, setUser_Id] = useState<number>();
  const [nameUser, setNameUser] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [response, setResponse] = React.useState<JSX.Element>();

  async function sendApi() {
    const payload = {
      user_id,
      name: nameUser,
      cpf,
      email,
      phone,
      password,
      address,
    };

    const { data } = await api.put("/user", payload);

    if (data === "Erro em atualizar os dados do usuario") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso na atualização das informações") {
      setResponse(<Alert severity="success">{data}</Alert>);
    } else if (data === "Usuario não existe na base de dados") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "cpf é inválido") {
        setResponse(<Alert severity="error">{data}</Alert>);
      }
  }

  useEffect(()=>{
      const sessionData:any = sessionStorage.getItem("data")
      const data = JSON.parse(sessionData)
      setUser_Id(data.user_id)

  },[])
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
          value={nameUser}
          onChange={(element) => setNameUser(element.target.value)}
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
          label="Email"
          value={email}
          onChange={(element) => setEmail(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Telefone"
          value={phone}
          onChange={(element) => setPhone(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Senha"
          value={password}
          onChange={(element) => setPassword(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Endereço"
          value={address}
          onChange={(element) => setAddress(element.target.value)}
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
