import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import api, { URL } from "../../../services/api";
import { IQuotas_Raffle } from "../../../types";
import {
  Button,
  FormControl,
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
export default function Delete() {
  const classes = useStyles();

  const [raffle_quotas, setRaffle_Quotas] = React.useState<IQuotas_Raffle[]>(
    []
  );
  const [quota_raffle_id, setQuota_Raffle_Id] = React.useState<
    number | undefined
  >();
  const [raffleQuotas_idOpen, setRaffleQuotas_idOpen] = React.useState(false);
  const [response, setResponse] = React.useState<JSX.Element>();

  const handleChangeRaffle_Quotas = (id: number | undefined, index: number) => {
    setQuota_Raffle_Id(id);
  };

  const handleCloseRaffle_Quotas = () => {
    setRaffleQuotas_idOpen(false);
  };

  const handleOpenDraw_Quotas = () => {
    setRaffleQuotas_idOpen(true);
  };

  useEffect(() => {
    async function getDraw_Quotas() {
      const { data } = await api.get("/quotas_rafles");
      setRaffle_Quotas(data);
    }
    getDraw_Quotas();
  }, []);

  async function sendApi() {
    const response = await fetch(URL + "/quota_raffle", {
      body: JSON.stringify({
        quota_raffle_id,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      method: "DELETE",
    });
    const data = await response.json();

    if (data === "Falhou em deletar a cota") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em deletar a cota") {
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
        <InputLabel id="demo-controlled-open-select-label">Cotas</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={raffleQuotas_idOpen}
          onClose={handleCloseRaffle_Quotas}
          onOpen={handleOpenDraw_Quotas}
          value={quota_raffle_id}
          required={true}
        >
          {raffle_quotas.map((raffle_quota, index) => (
            <MenuItem
              key={raffle_quota.quota_raffle_id}
              value={raffle_quota.quota_raffle_id}
              onClick={() =>
                handleChangeRaffle_Quotas(raffle_quota.quota_raffle_id, index)
              }
            >
              {raffle_quota.number}
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
