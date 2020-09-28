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
import { IDraw } from "../../../types";

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

  const [name, setName] = React.useState("");
  const [draws, setDraws] = React.useState<IDraw[]>([]);
  const [draws_draw_id, setDraws_Draw_Id] = React.useState<number>();
  const [data_image, setData_Image] = React.useState<string>("");
  const [response, setResponse] = React.useState<JSX.Element>();
  const [draw_idOpen, setDraw_idOpen] = React.useState(false);

  const handleChangeDraw = (id: number | undefined, index: number) => {
    setDraws_Draw_Id(id);

  };

  const handlChangeDataImage = (file: any) => {
    setData_Image(file.base64);
  };

  const handleChangeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string);
  };

  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get("/draws");

      setDraws(data);
    }
    getDraws();
  }, []);
  async function sendApi() {
    const payload = {
      name,
      draws_draw_id,
      data_image,
    };

    const { data } = await api.post("/image", payload);
    if (data === "Falhou em criar imagem para o sorteio") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em criar a imagem do sorteio") {
      setResponse(<Alert severity="success">{data}</Alert>);
    }
  }

  const handleCloseDraw_id = () => {
    setDraw_idOpen(false);
  };

  const handleOpenDraw_id = () => {
    setDraw_idOpen(true);
  };

  return (
    <form
      className={classes.root}
      noValidate={false}
      onSubmit={(event) => event.preventDefault()}
      autoComplete="off"
    >
      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Sorteio</InputLabel>
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
          Cadastar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
