import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PersonIcon from '@material-ui/icons/Person';
import LensIcon from '@material-ui/icons/Lens';
import ImageIcon from '@material-ui/icons/Image';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessIcon from '@material-ui/icons/Business';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DescriptionIcon from '@material-ui/icons/Description';
import { useDispatch } from "react-redux";
import {Action } from '../../store/screen'



import DrawCreate from '../Draw/Create'


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));
export default function MenuAdmin() {
  const classes = useStyles();
  const [drawsOpen, setDrawsOpen] = React.useState(false);
  const [rafflesOpen, setRafflesOpen] = React.useState(false);
  const [winnersDraw,setWinnersDraw] =  React.useState(false);
  const [winnersRaffle,setWinnersRaffle] =  React.useState(false);
  const [reports,setReports] =  React.useState(false);
  const [quotasDraws,setQuotasDraws] =  React.useState(false);
  const [quotasRaffles,setQuotasRaffles] =  React.useState(false);
  const [business,setBusiness] =  React.useState(false);
  const [images,setImages] =  React.useState(false);
  const [users,setUsers] =  React.useState(false);
  const [banks,setBanks] =  React.useState(false);
  const dispatch = useDispatch();

  const handleClickDraws = () => {
    setDrawsOpen(!drawsOpen);
  };
  const handleClickRaffles = () => {
    setRafflesOpen(!rafflesOpen);
  };

  const handleClickWinnersDrawRaffles = () => {
    setWinnersDraw(!winnersDraw);
  };

  const handleClickWinnersRaffles = () => {
    setWinnersRaffle(!winnersRaffle);
  };

  const handleClickReports = () => {
    setReports(!reports);
  };

  const handleClickQuotasDraw = () => {
    setQuotasDraws(!quotasDraws);
  };

  const handleClickQuotasRaffles = () => {
    setQuotasRaffles(!quotasRaffles);
  };

  const handleClickBusiness = () => {
    setBusiness(!business);
  };
  const handleClickImages = () => {
    setImages(!images);
  };

  const handleClickUsers = () => {
    setUsers(!users);
  };

  const handleClickBanks = () => {
    setBanks(!banks);
  };

  function handlePageDrawCreate() {
    dispatch<Action>({ type:"set", state: DrawCreate })

  }

  return (
    <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root} >
      <ListItem button onClick={handleClickDraws}>
          <ListItemIcon>
              <ConfirmationNumberIcon/>
          </ListItemIcon>
      <ListItemText primary="Sorteios" />{" "}{drawsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={drawsOpen} timeout="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Sorteios" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={handlePageDrawCreate} >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Sorteio" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Sorteio" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Sorteio" />
          </ListItem>

      </Collapse>

      <ListItem button onClick={handleClickRaffles}>
         <ListItemIcon>
              <ConfirmationNumberIcon/>
          </ListItemIcon>
      <ListItemText primary="Rifas" />{" "}{rafflesOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={rafflesOpen} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Rifas" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Rifa" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Rifa" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Rifa" />
          </ListItem>
      </Collapse>
      
      <ListItem button onClick={handleClickWinnersDrawRaffles}>
         <ListItemIcon>
              <PersonIcon/>
          </ListItemIcon>
      <ListItemText primary="G de Sorteios" />{" "}{winnersDraw ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={winnersDraw} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Ganhadores" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Ganhador" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Ganhador" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Ganhador" />
          </ListItem>
      </Collapse>

      <ListItem button onClick={handleClickQuotasDraw}>
         <ListItemIcon>
              <LensIcon/>
          </ListItemIcon>
      <ListItemText primary="Cotas de Sorteios" />{" "}{quotasDraws ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={quotasDraws} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Cotas" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Cota" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Cota" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Cota" />
          </ListItem>
      </Collapse>


      <ListItem button onClick={handleClickImages}>
          <ListItemIcon>
              <ImageIcon/>
          </ListItemIcon>
      <ListItemText primary="Imagens" />{" "}{images ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={images} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Imagens" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Imagem" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Imagem" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Imagem" />
          </ListItem>
      </Collapse>

      <ListItem button onClick={handleClickQuotasRaffles}>
         <ListItemIcon>
              <LensIcon/>
          </ListItemIcon>
      <ListItemText primary="Cotas de Rifas" />{" "}{quotasRaffles ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={quotasRaffles} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Cotas" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Cota" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Cota" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Cota" />
          </ListItem>
      </Collapse>

      <ListItem button onClick={handleClickWinnersRaffles}>
          <ListItemIcon>
              <PersonIcon/>
          </ListItemIcon>
      <ListItemText primary="G de Rifas" />{" "}{winnersRaffle ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={winnersRaffle} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Ganhadores" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Ganhador" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Ganhador" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Ganhador" />
          </ListItem>
      </Collapse>

      <ListItem button onClick={handleClickUsers}>
          <ListItemIcon>
              <SupervisorAccountIcon/>
          </ListItemIcon>

      <ListItemText primary="Usuarios" />{" "}{users ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={users} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Usuarios" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Usuario" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Usuario" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Usuario" />
          </ListItem>
      </Collapse>


      <ListItem button onClick={handleClickBusiness}>
         <ListItemIcon>
              <BusinessIcon/>
          </ListItemIcon>
      <ListItemText primary="Negócio" />{" "}{business ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={business} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Informações" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Informações" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Informações" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Informações" />
          </ListItem>
      </Collapse>

      <ListItem button onClick={handleClickBanks}>
          <ListItemIcon>
              <AccountBalanceIcon/>
          </ListItemIcon>
      <ListItemText primary="Contas Bancárias" />{" "}{banks ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={banks} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Listar Contas" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cadastrar Conta" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Atualizar Conta" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Deletar Conta" />
          </ListItem>
      </Collapse>
      <ListItem button onClick={handleClickReports}>
          <ListItemIcon>
              <DescriptionIcon/>
          </ListItemIcon>
      <ListItemText primary="Ralatorios" />{" "}{reports ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={reports} timeout="auto" unmountOnExit>
      <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Sorteios" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Rifas" />
          </ListItem>
      </Collapse>
    </List>
  );
}
