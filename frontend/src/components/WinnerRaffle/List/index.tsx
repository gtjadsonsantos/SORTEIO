import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Ijoin_raffles_participants_users_quotas_raffles } from "../../../types";
import ReactPlayer from "react-player";

import { Container } from "./styles";
import api from "../../../services/api";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 670,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [winnerRaffles, setWinnerRaffles] = useState<
    Ijoin_raffles_participants_users_quotas_raffles[]
  >([]);

  useEffect(() => {
    async function getWinnerDraws() {
      const { data } = await api.get(
        "/join_raffles_participants_users_quotas_raffles"
      );

      setWinnerRaffles(data[0]);
    }

    getWinnerDraws();
  }, []);

  return (
    <Container>
      {winnerRaffles.length > 0
        ? winnerRaffles.map((winner) => (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={winner.image}
                  title={winner.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {winner.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3">
                    {winner.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    #{winner.cotas}
                  </Typography>
                  <ReactPlayer style={{diplay: `${winner.video !== " " ? "block":"none" }`}}  url={winner.video} width={winner.video !== " " ? 360:0} height={winner.video !== " " ? 250:0} controls={true} />
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        : ""}
    </Container>
  );
}
