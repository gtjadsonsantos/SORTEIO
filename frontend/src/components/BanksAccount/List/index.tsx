import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Container } from "./styles";

import { IBank_Account } from "../../../types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
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
export default function List() {
  const classes = useStyles();
  const [banks, setBanks] = useState<IBank_Account[]>([]);

  useEffect(() => {
    async function getBanks() {
      const { data } = await api.get("/banks_accounts");
      setBanks(data);
    }
    getBanks();
  }, []);

  return (
    <Container>
      {banks.length > 0
        ? banks.map((bank) => (
            <Card className={classes.root} style={{ width: "290px", margin: "10px 10px 10px 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={bank.name}
                  image={bank.image}
                  title={bank.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h6">
                    {bank.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h6">
                    Agencia: {bank.agency}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h6">
                    Cnpj: {bank.cnpj}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h6">
                    Cpf: {bank.cpf}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h6">
                    Conta: {bank.number_account}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        : ""}
    </Container>
  );
}
