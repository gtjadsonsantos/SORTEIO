import React, { useEffect } from "react";
import api from "../../../services/api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import Typography from "@material-ui/core/Typography";
import { IRaffles } from "../../../types";
import { Container } from "./styles";
import Timer from "../../../global/Timer";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 0,
  },
});

export default function List() {
  const classes = useStyles();

  const [raffles, setRaffles] = React.useState<IRaffles[]>([]);

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/raffles");

      setRaffles(data);
    }
    getDraws();
  }, []);

  function handleTimerDate(raffle: IRaffles) {
    const date = new Date(`${raffle.date_raffle}`);
    return Timer(
      new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
      )
    );
  }

  return (
    <Container>
      {raffles.length > 0
        ? raffles.map((raffle) => (
            <Card
              className={classes.root}
              style={{
                width: "30%",
                minWidth: "350px",
                margin: "0px 10px 0px 0px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={raffle.title}
                  height="180"
                  image={raffle.image}
                  title={raffle.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h6">
                    {raffle.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {raffle.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ReactMarkdown
                      source={raffle.description}
                      escapeHtml={true}
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    R$ {raffle.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Data da rifa: dias: {handleTimerDate(raffle).days} horas:{" "}
                    {handleTimerDate(raffle).hours} minutos:{" "}
                    {handleTimerDate(raffle).minutes}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "5.1em",
                      backgroundColor: `${
                        raffle.status == "active" ? "green" : "red"
                      }`,
                    }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        : ""}
    </Container>
  );
}
