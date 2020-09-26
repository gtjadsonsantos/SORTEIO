import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Alert from "@material-ui/lab/Alert";
import api from '../../../services/api'
import { Button, FormControl, Input, InputAdornment, InputLabel, MenuItem, Select } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(2),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    button: {
        margin: theme.spacing(1),
      },
  }),
)
export default function Create() {
  const classes = useStyles();

  const [title,setTitle] = React.useState("")
  const [status, setStatus] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [subtitle, setSubtitle] = React.useState<string>('');

  const [value,setValue] = React.useState<number>(0.0)
  const [date,setDate] = React.useState<string>("2017-05-24T10:30")
  const [statusOpen, setStatusOpen] = React.useState(false);
  const [response,setResponse] = React.useState<JSX.Element>()

  const handleChangeStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };
  const handleChangeSubtitle = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSubtitle(event.target.value as string);
  };

  const handleChangeTitle = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTitle(event.target.value as string);
  };

  const handleChangeDate = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDate(event.target.value as string);
  };

  const handleChangeValue = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as number);
  };

  const handleChangeDescription = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDescription(event.target.value as string);
  };

  async function sendApi() {
    const payload = {
        title,
        subtitle,
        status,
        value,
        description,
        date_draw: date
    }

    const {data } = await api.post("/draw",payload)
    if (data === "Falhou em crair o sorteio"){
        setResponse(<Alert severity="error">{data}</Alert>);
    }else if (data === "Sucesso em criar o sorteio") {
        setResponse(<Alert severity="success">{data}</Alert>);
    }
}
  
  const handleCloseStatus = () => {
    setStatusOpen(false);
  };

  const handleOpenStatus = () => {
    setStatusOpen(true);
  };

  return (
    <form className={classes.root} noValidate={false} onSubmit={event => event.preventDefault()} autoComplete="off">
      <FormControl fullWidth className={classes.margin}>
        <TextField required={true}  id="outlined-basic" label="Titulo" value={title} onChange={handleChangeTitle} />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField required={true} onChange={handleChangeSubtitle}  value={subtitle} id="outlined-basic" label="Subtitulo" />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
       <TextField id="datetime-local" required={true} label="Data do Sorteio" type="datetime-local" value={date} onChange={handleChangeDate}  className={classes.textField} InputLabelProps={{ shrink: true}} />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField id="standard-multiline-static" required={true} onChange={handleChangeDescription} label="Descrição" multiline  value={description} />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
      <InputLabel htmlFor="standard-adornment-amount">Valor</InputLabel>
        <Input id="standard-adornment-amount" value={value} required={true} onChange={handleChangeValue} startAdornment={<InputAdornment position="start">$</InputAdornment>} />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select
          style={{width: "200px"}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={statusOpen}
          onClose={handleCloseStatus}
          onOpen={handleOpenStatus}
          value={status}
          onChange={handleChangeStatus}
          required={true}
        >
          <MenuItem value="active">Ativo</MenuItem>
          <MenuItem value="closed">Fechado</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <Button variant="contained" color="primary" type="submit" onClick={sendApi} style={{width:"200px"}}  className={classes.button} >
            Enviar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
