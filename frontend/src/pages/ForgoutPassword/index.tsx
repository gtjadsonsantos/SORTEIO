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
import Email from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import api from "../../services/api";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://pilotandopremios.com.br">
        https://pilotandopremios.com.br
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

export default function ForgoutPassword() {
  const classes = useStyles();
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [responseLogin, setResponseLogin] = useState<JSX.Element>();

  // const [responseLogin, setResponseLogin] = useState<JSX.Element>();

  async function handleLogin() {
    const payload = JSON.stringify({
      cpf,
      email,
    });

    if (cpf.length === 11) {
      const { data } = await api.post("/forgout_password", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data === "Email enviado com sucesso, verifique seu email") {
        setResponseLogin(<Alert severity="success">{data}</Alert>);
      } else if (data === "O cpf informado é inválido") {
        setResponseLogin(<Alert severity="error">{data}</Alert>);
      } else if (data === "O cpf ou email informado, não pertence a nenhum usuário") {
        setResponseLogin(<Alert severity="info">{data}</Alert>);
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Email />
        </Avatar>
        <Typography component="h1" variant="h5">
          Recuperação de senha
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => e.preventDefault()}
          noValidate={false}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cpf"
            label="cpf"
            onChange={(element) =>
              setCpf(element.target.value.replace(/[^\d]+/g, ""))
            }
            name="cpf"
            autoComplete="cpf"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            onChange={(element) => setEmail(element.target.value)}
            name="email"
            autoComplete="email"
            autoFocus
          />
          {responseLogin}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            onClick={handleLogin}
            className={classes.submit}
          >
            Enviar
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
