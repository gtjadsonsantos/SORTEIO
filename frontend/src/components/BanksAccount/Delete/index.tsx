import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import api, { URL } from "../../../services/api";
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
export default function Delete() {
  const classes = useStyles();
  const [banks, setBanks] = useState<IBank_Account[]>([]);
  const [bank_account_id, setBank_Account_Id] = useState<number | undefined>();
  const [response, setResponse] = React.useState<JSX.Element>();
  const [bank_idOpen, setBank_idOpen] = useState<boolean>(false);

  const handleClosebBank_id = () => {
    setBank_idOpen(false);
  };
  const handleOpenBank_id = () => {
    setBank_idOpen(true);
  };
  const handleChangeBank = (id: number | undefined, index: number) => {
    setBank_Account_Id(id);
  };

  useEffect(() => {
    async function getBanks() {
      const { data } = await api.get("/banks_accounts");
      setBanks(data);
    }
    getBanks();
  }, []);
  async function sendApi() {
    const response = await fetch(URL + "/bank_account", {
      body: JSON.stringify({
        bank_account_id: bank_account_id,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      method: "DELETE",
    });
    const data = await response.json();

    if (data === "Falhou em deletar banco") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em deletar banco") {
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "200px" }}
          onClick={sendApi}
          className={classes.button}
        >
          Deletar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
