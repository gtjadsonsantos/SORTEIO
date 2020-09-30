import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FileBase64 from "react-file-base64";
import Alert from "@material-ui/lab/Alert";
import api from "../../../services/api";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { IBank_Account } from "../../../types";

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
  const [banks, setBanks] = useState<IBank_Account[]>([]);
  const [bank_account_id, setBank_Account_Id] = useState<number | undefined>();
  const [cnpj, setCnpj] = useState<string | undefined>();
  const [nameBank, setNameBank] = useState<string | undefined>();
  const [numberAccount, setNumberAccount] = useState<string | undefined>();
  const [cpf, setCpf] = useState<string | undefined>();
  const [agency, setAgency] = useState<string | undefined>();
  const [image, setImage] = useState<string | undefined>();
  const [response, setResponse] = React.useState<JSX.Element>();
  const [bank_idOpen, setBank_idOpen] = useState<boolean>(false);

  const handlChangeImagem = (file: any) => {
    setImage(file.base64);
  };

  const handleClosebBank_id = () => {
    setBank_idOpen(false);
  };
  const handleOpenBank_id = () => {
    setBank_idOpen(true);
  };
  const handleChangeBank = (id: number | undefined, index: number) => {
    setBank_Account_Id(id);
    setCnpj(banks[index].cnpj);
    setNameBank(banks[index].name);
    setNumberAccount(banks[index].number_account);
    setCpf(banks[index].cpf);
    setAgency(banks[index].agency);
    setImage(banks[index].image);
  };

  useEffect(() => {
    async function getBanks() {
      const { data } = await api.get("/banks_accounts");
      setBanks(data);
    }
    getBanks();
  }, []);
  async function sendApi() {
    const payload = {
      bank_account_id,
      cnpj,
      image,
      cpf,
      agency,
      number_account: numberAccount,
      name: nameBank,
    };

    const { data } = await api.put("/bank_account", payload);

    if (data === "Falhou em atualizar banco") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em atualizar banco") {
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
      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Bancos</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={bank_idOpen}
          onClose={handleClosebBank_id}
          onOpen={handleOpenBank_id}
          value={bank_account_id}
          required={true}
        >
          {banks.map((bank, index) => (
            <MenuItem
              key={bank.bank_account_id}
              value={bank.bank_account_id}
              onClick={() => handleChangeBank(bank.bank_account_id, index)}
            >
              {bank.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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
          onChange={(element) => setAgency(element.target.value)}
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
          Atualizar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
