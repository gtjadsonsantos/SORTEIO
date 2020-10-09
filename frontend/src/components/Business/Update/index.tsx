import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FileBase64 from "react-file-base64";
import Alert from "@material-ui/lab/Alert";
import api from "../../../services/api";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { IBusiness, ISocial } from "../../../types";

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
  const [business, setBusiness] = useState<IBusiness[]>([]);
  const [business_id, setBusiness_Id] = useState<number | undefined>(0);
  const [cnpj, setCnpj] = useState<string | undefined>();
  const [fantasy_name, setFantasyName] = useState<string | undefined>();
  const [logo, setLogo] = useState<string | undefined>();
  const [banner,setBanner] = useState<string|undefined>()
  const [phone, setPhone] = useState<string | undefined>();
  const [regulation, setRegulation] = useState<string | undefined>();
  const [facebook, setFacebook] = useState<string | undefined>();
  const [whatsapp, setWhatsapp] = useState<string | undefined>();
  const [instagram, setInstagram] = useState<string | undefined>();
  const [response, setResponse] = React.useState<JSX.Element>();
  const [business_idOpen, setBusiness_idOpen] = useState<boolean>(false);

  const handlChangeLogo = (file: any) => {
    setLogo(file.base64);
  };
  const handlChangeBanner = (file: any) => {
    setBanner(file.base64);
  };

  const handleChangeBusiness = (id: number | undefined, index: number) => {
    setBusiness_Id(id);
    setCnpj(business[index].cnpj);
    setFantasyName(business[index].fantasy_name);
    setPhone(business[index].phone);
    setRegulation(business[index].regulation);
    setLogo(business[index].logo);
    setBanner(business[index].banner)

    const socials: ISocial = JSON.parse(`${business[index].social}`);

    setFacebook(socials.facebook);
    setWhatsapp(socials.whatsapp);
    setInstagram(socials.instagram);
  };

  const handleCloseBusiness_id = () => {
    setBusiness_idOpen(false);
  };
  const handleOpenBusiness_id = () => {
    setBusiness_idOpen(true);
  };

  useEffect(() => {
    async function getBusiness() {
      const { data } = await api.get("/business");
      setBusiness(data);
    }
    getBusiness();
  }, []);

  async function sendApi() {
    const payload = {
      business_id,
      cnpj,
      fantasy_name,
      logo,
      banner,
      phone,
      regulation,
      social:  `${facebook},${whatsapp},${instagram}`
    };

    const { data } = await api.put("/business", payload);

    if (data === "Falhou em atualizar Business") {
      setResponse(<Alert severity="error">{data}</Alert>);
    } else if (data === "Sucesso em atualizar Business") {
      setResponse(<Alert severity="success">{data}</Alert>);
    } else if (data === "Cnpj inválido") {
      setResponse(<Alert severity="error">{data}</Alert>);
    }
  }

  return (
    <form
      className={classes.root}
      noValidate={false}
      onSubmit={(event) => event.preventDefault()}
      autoComplete="off"
    >
      <FormControl className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Negocio</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={business_idOpen}
          onClose={handleCloseBusiness_id}
          onOpen={handleOpenBusiness_id}
          value={business_id}
          required={true}
        >
          {business.map((busines, index) => (
            <MenuItem
              key={busines.business_id}
              value={busines.business_id}
              onClick={() => handleChangeBusiness(busines.business_id, index)}
            >
              {busines.fantasy_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="cnpj"
          value={cnpj}
          onChange={(element) => setCnpj(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Nome fantasia"
          value={fantasy_name}
          onChange={(element) => setFantasyName(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Logo</InputLabel>
        <FileBase64 multiple={false} onDone={handlChangeLogo} />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel id="demo-controlled-open-select-label">Banner</InputLabel>
        <FileBase64 multiple={false} onDone={handlChangeBanner} />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Telefone"
          value={phone}
          onChange={(element) => setPhone(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Regulação"
          value={regulation}
          onChange={(element) => setRegulation(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Facebook"
          value={facebook}
          onChange={(element) => setFacebook(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Instagram"
          value={instagram}
          onChange={(element) => setInstagram(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          required={true}
          id="outlined-basic"
          label="Whatsapp"
          value={whatsapp}
          onChange={(element) => setWhatsapp(element.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "200px" }}
          onClick={sendApi}
          className={classes.button}
        >
          Atualizar
        </Button>
      </FormControl>
      {response}
    </form>
  );
}
