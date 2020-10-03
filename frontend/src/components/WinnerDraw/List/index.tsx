import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Ijoin_winners_participants_users_quotas_draw } from "../../../types";
import ReactPlayer from 'react-player'

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
  const [winnerDraws, setWinnerDraws] = useState<
    Ijoin_winners_participants_users_quotas_draw[]
  >([]);

  useEffect(() => {
    async function getWinnerDraws() {
      const { data } = await api.get(
        "/join_winners_participants_users_quotas_draw"
      );

      setWinnerDraws(data[0]);
    }

    getWinnerDraws();
  }, []);

  return (
    <Container>
      {winnerDraws.length > 0
        ? winnerDraws.map((winner) => (
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
                  <ReactPlayer style={{diplay: `${winner.video? "block":"none" }`}} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={360} height={250} controls={true} />
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        : ""}
    </Container>
  );
}
