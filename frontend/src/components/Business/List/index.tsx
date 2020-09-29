import React, { useState, useEffect } from "react";
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
import { IBusiness, ISocial } from "../../../types";

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
  const [business, setBusiness] = useState<IBusiness[]>([]);
  const [business_id, setBusiness_Id] = useState<number | undefined>();
  const [response, setResponse] = React.useState<JSX.Element>();
  const [business_idOpen, setBusiness_idOpen] = useState<boolean>(false);

  const handleChangeBusiness = (id: number | undefined, index: number) => {
    setBusiness_Id(id);
  };

  const handleCloseBusiness_id = () => {
    setBusiness_idOpen(false);
  };
  const handleOpenBusiness_id = () => {
    setBusiness_idOpen(true);
  };

  useEffect(() => {
    async function getBusiness() {
      const { data } = await api.get("/business");
      setBusiness(data);
    }
    getBusiness();
  }, []);

  return (
    <form
      className={classes.root}
      noValidate={false}
      onSubmit={(event) => event.preventDefault()}
      autoComplete="off"
    >
      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Negocio</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={business_idOpen}
          onClose={handleCloseBusiness_id}
          onOpen={handleOpenBusiness_id}
          value={business_id}
          required={true}
        >
          {business.map((busines, index) => (
            <MenuItem
              key={busines.business_id}
              value={busines.business_id}
              onClick={() => handleChangeBusiness(busines.business_id, index)}
            >
              {busines.fantasy_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}
