import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import api from "../../../services/api";
import { Container } from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import {IImage } from "../../../types";

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
  const [images, setImages] = React.useState<IImage[]>([]);

  useEffect(() => {
    async function getImages() {
      const { data } = await api.get("/images");

      setImages(data);
    }
    getImages();
  }, []);

  return (
    <Container>
      {images.length > 0
        ? images.map((images) => (
            <Card className={classes.root} style={{margin: "0px 10px  0px 0px"}}> 
              <CardActionArea>
                <img
                  style={{objectFit: "scale-down"}}
                  alt={images.name}
                  height="400"
                  src={images.data_image}
                  title={images.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h6">
                    {images.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h6">
                    {images.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        : ""}
    </Container>
  );
}
