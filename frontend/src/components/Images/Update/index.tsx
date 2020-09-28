import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FileBase64 from "react-file-base64";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import api from "../../../services/api";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { IDraw,IImage } from "../../../types";

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

  const [name, setName] = React.useState<string|undefined>("");
  const [draws, setDraws] = React.useState<IDraw[]>([]);
  const [images, setImages] = React.useState<IImage[]>([]);

  const [draws_draw_id, setDraws_Draw_Id] = React.useState<number|undefined>();
  const [image_id, setImage_Id] = React.useState<number>();

  const [data_image, setData_Image] = React.useState<string|undefined>("");
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
    setName(images[index].name)
    setData_Image(images[index].data_image)
    
  };

  const handlChangeDataImage = (file: any) => {
    setData_Image(file.base64);
  };

  const handleChangeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string);
  };

 
  async function sendApi() {
    const payload = {
      name,
      draws_draw_id,
      data_image,
      image_id
    };

    const { data } = await api.put("/image", payload);
    if (data === "Falhou em atualizar imagem para o sorteio") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em atualizar a imagem") {
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
          {images.map((image, index) => (
           image.draws_draw_id === draws_draw_id?<MenuItem
              key={image.image_id}
              value={image.image_id}
              onClick={() => handleChangeImage(image.image_id, index)}
            >
              {image.name}
            </MenuItem>:<div key={image.image_id} style={{display:"none"}}></div>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          onChange={handleChangeName}
          value={name}
          id="outlined-basic"
          label="Nome"
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <FileBase64 multiple={false} onDone={handlChangeDataImage} />
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
          Atualizar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}

