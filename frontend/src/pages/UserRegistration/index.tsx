import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountBox from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import api from "../../services/api";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://pilotandomotos.com.br">
        https://pilotandomotos.com.br
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserRegistration() {
  const classes = useStyles();
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [responseLogin, setResponseLogin] = useState<JSX.Element>();

  async function handleLogin() {
    const payload = {
      cpf,
      name,
      email,
      phone,
      password,
      address,
    };
    if (
      cpf.length === 11 &&
      name.length > 1 &&
      email.length > 5 &&
      phone.length >= 9 &&
      password.length >= 5 &&
      address.length > 10
    ) {
      const { data } = await api.post("/user", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data === "Usuario criado com sucesso") {
        setResponseLogin(<Alert severity="success">{data}</Alert>);
      } else if (data === "cpf é inválido") {
        setResponseLogin(<Alert severity="error">{data}</Alert>);
      } else if (data === "Já existe um usuário com este cpf") {
        setResponseLogin(<Alert severity="info">{data}</Alert>);
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBox />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro de Usuario
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => e.preventDefault()}
          noValidate={false}
        >
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(element) =>
              setCpf(element.target.value.replace(/[^\d]+/g, ""))
            }
            required
            fullWidth
            id="cpf"
            label="Cpf"
            name="cpf"
            autoComplete="cpf"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(element) => setName(element.target.value)}
            required
            fullWidth
            id="name"
            label="Nome"
            name="nome"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(element) => setEmail(element.target.value)}
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(element) =>
              setPhone(element.target.value.replace(/[^\d]+/g, ""))
            }
            required
            fullWidth
            id="phone"
            label="Telefone"
            name="phone"
            autoComplete="phone"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(element) => setPassword(element.target.value)}
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(element) => setAddress(element.target.value)}
            required
            fullWidth
            id="address"
            label="endereço"
            name="address"
            autoComplete="address"
            autoFocus
          />
          {responseLogin}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            className={classes.submit}
          >
            Cadastrar
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
