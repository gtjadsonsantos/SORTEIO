import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container } from "./styles";
import { IRaffles } from "../../../types";
import { useDispatch } from "react-redux";
import { Action } from "../../../store/screen";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ReactMarkdown from "react-markdown";
import ModalRaffle from "../ModalRaffle";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 0,
  },
});


export default function Create() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [raffles, setRaffles] = useState<IRaffles[]>([]);

  useEffect(() => {
    async function getRaffles() {
      const { data } = await api.get("/raffles");

      setRaffles(data);
    }
    getRaffles();
  }, []);
  function handleModalRaffle(id: number | undefined) {
    sessionStorage.setItem("raffle_id", `${id}`);
    dispatch<Action>({ type: "set", state: ModalRaffle });
  }

  return (
    <Container>
      {raffles.length > 0
        ? raffles.map((raffle) => (
            <Card
              className={classes.root}
              style={{ width: "30%", minWidth: "350px" }}
            >
              <CardActionArea>
                <CarouselProvider
                  naturalSlideWidth={130}
                  naturalSlideHeight={60}
                  totalSlides={1}
                >
                  <Slider>
                    {
                      <Slide index={1} style={{ height: "400px" }}>
                        <CardMedia
                          component="img"
                          style={{objectFit: "scale-down"}}
                          alt={raffle.title}
                          height="300px"
                          width="300px"
                          image={raffle.image}
                          title={raffle.title}
                        />
                      </Slide>
                    }
                  </Slider>
                </CarouselProvider>
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
              <CardActions>
                <Button
                  size="medium"
                  color="primary"
                  style={{
                    display: `${raffle.status === "active" ? "block" : "none"}`,
                  }}
                  onClick={() => handleModalRaffle(raffle.raffle_id)}
                >
                  Participar
                </Button>
              </CardActions>
            </Card>
          ))
        : ""}
    </Container>
  );
}
