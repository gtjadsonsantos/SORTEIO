import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container } from "./styles";
import { IDraw, IImage } from "../../../types";
import { useDispatch } from "react-redux";
import { Action } from "../../../store/screen";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ReactMarkdown from "react-markdown";
import ModalDraw from '../ModalDraw'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 0,
  },
});

export default function Create() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [draws, setDraws] = useState<IDraw[]>([]);
  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    async function getImages() {
      const { data } = await api.get("/images");

      setImages(data);
    }
    getImages();
  }, []);

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/draws");

      setDraws(data);
    }
    getDraws();
  }, []);
  function handleModalDraw(id:number|undefined) {
    sessionStorage.setItem("draw_id",`${id}`)

    dispatch<Action>({ type: "set", state: ModalDraw});
  }

  return (
    <Container>
      {draws.length > 0
        ? draws.map((draw) => (
            <Card
              className={classes.root}
              style={{ width: "30%", minWidth: "350px" }}
            >
              <CardActionArea>
                <CarouselProvider
                  naturalSlideWidth={130}
                  naturalSlideHeight={60}
                  totalSlides={8}
                  dragEnabled={true}
                  
                >
                  <Slider>
                    {images.map((image, index) =>
                      image.draws_draw_id === draw.draw_id ? (
                        <Slide index={index} style={{ height: "400px" }}>
                          <img
                            style={{objectFit:"scale-down"}}
                            alt={image.name}
                            height="100%"
                            width="100%"
                            src={image.data_image}
                            title={image.name}
                          />
                        </Slide>
                      ) : (
                        <></>
                      )
                    )}
                  </Slider>
                </CarouselProvider>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h6">
                    {draw.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {draw.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ReactMarkdown
                      source={draw.description}
                      escapeHtml={true}
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    R$ {draw.value}
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
                        draw.status === "active" ? "green" : "red"
                      }`,
                    }}
                  />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary" style={{display:`${draw.status === "active"?"block":"none" }`}} onClick={()=> handleModalDraw(draw.draw_id)}>
                  Participar
                </Button>
              </CardActions>
            </Card>
          ))
        : ""}
    </Container>
  );
}
