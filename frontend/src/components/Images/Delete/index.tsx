import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import api,{URL} from "../../../services/api";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { IDraw, IImage } from "../../../types";

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
  const [draws, setDraws] = React.useState<IDraw[]>([]);
  const [images, setImages] = React.useState<IImage[]>([]);
  const [draws_draw_id, setDraws_Draw_Id] = React.useState<number | undefined>();
  const [image_id, setImage_Id] = React.useState<number>();
  const [response, setResponse] = React.useState<JSX.Element>();
  const [draw_idOpen, setDraw_idOpen] = React.useState(false);
  const [image_idOpen, setImage_idOpen] = React.useState(false);

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/draws");

      setDraws(data);
    }
    getDraws();
  }, []);

  useEffect(() => {
    async function getImages() {
      const { data } = await api.get("/images");

      setImages(data);
    }
    getImages();
  }, []);

  const handleChangeDraw = (id: number | undefined, index: number) => {
    setDraws_Draw_Id(id);
  };
  const handleChangeImage = (id: number | undefined, index: number) => {
    setImage_Id(id);
  };



  async function sendApi() {

    const response = await fetch(URL + "/image", {
      body: JSON.stringify({
        image_id
      }),
      headers: {
       "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      method: "DELETE",
    });
    const data = await response.json();

     if (data === "Falhou em deletar a imagem"){
         setResponse(<Alert severity="error">{data}</Alert>);
     }else if (data === "Sucesso em deletar a imagem") {
         setResponse(<Alert severity="success">{data}</Alert>);
     }

  }

  const handleCloseDraw_id = () => {
    setDraw_idOpen(false);
  };

  const handleOpenDraw_id = () => {
    setDraw_idOpen(true);
  };
  const handleCloseImage_id = () => {
    setImage_idOpen(false);
  };

  const handleOpenImage_id = () => {
    setImage_idOpen(true);
  };
  return (
    <form
      className={classes.root}
      noValidate={false}
      onSubmit={(event) => event.preventDefault()}
      autoComplete="off"
    >
      <FormControl fullWidth className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Sorteio</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={image_idOpen}
          onClose={handleCloseImage_id}
          onOpen={handleOpenImage_id}
          value={image_id}
          required={true}
        >
          {draws.map((draw, index) => (
            <MenuItem
              key={draw.draw_id}
              value={draw.draw_id}
              onClick={() => handleChangeDraw(draw.draw_id, index)}
            >
              {draw.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Images</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={draw_idOpen}
          onClose={handleCloseDraw_id}
          onOpen={handleOpenDraw_id}
          value={draws_draw_id}
          required={true}
        >
          {images.map((image, index) =>
            image.draws_draw_id === draws_draw_id ? (
              <MenuItem
                key={image.image_id}
                value={image.image_id}
                onClick={() => handleChangeImage(image.image_id, index)}
              >
                {image.name}
              </MenuItem>
            ) : (
              <div key={image.image_id} style={{ display: "none" }}></div>
            )
          )}
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
