import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import api, { URL } from "../../../services/api";
import { IDraw_QuotasVO } from "../../../types";
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
export default function Create() {
  const classes = useStyles();

  const [draw_quotas, setDraw_Quotas] = React.useState<IDraw_QuotasVO[]>([]);
  const [draw_quota_id, setDraw_Quota_Id] = React.useState<
    number | undefined
  >();
  const [drawQuotas_idOpen, setDrawQuotas_idOpen] = React.useState(false);
  const [response, setResponse] = React.useState<JSX.Element>();

  const handleChangeDraw_Quotas = (id: number | undefined, index: number) => {
    setDraw_Quota_Id(id);
  };

  const handleCloseDraw_Quotas = () => {
    setDrawQuotas_idOpen(false);
  };

  const handleOpenDraw_Quotas = () => {
    setDrawQuotas_idOpen(true);
  };

  useEffect(() => {
    async function getDraw_Quotas() {
      const { data } = await api.get("/draw_quotas");
      setDraw_Quotas(data);
    }
    getDraw_Quotas();
  }, []);

  async function sendApi() {
    const response = await fetch(URL + "/draw_quota", {
      body: JSON.stringify({
        draw_quota_id,
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
          open={drawQuotas_idOpen}
          onClose={handleCloseDraw_Quotas}
          onOpen={handleOpenDraw_Quotas}
          value={draw_quota_id}
          required={true}
        >
          {draw_quotas.map((draw_quota, index) => (
            <MenuItem
              key={draw_quota.draw_quota_id}
              value={draw_quota.draw_quota_id}
              onClick={() =>
                handleChangeDraw_Quotas(draw_quota.draw_quota_id, index)
              }
            >
              {draw_quota.number}
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
          Deleta
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
