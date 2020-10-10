import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import ExitToApp from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import LensIcon from "@material-ui/icons/Lens";
import ImageIcon from "@material-ui/icons/Image";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessIcon from "@material-ui/icons/Business";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DescriptionIcon from "@material-ui/icons/Description";
import { useDispatch } from "react-redux";
import { Action } from "../../store/screen";

import DrawList from "../Draw/List";
import DrawCreate from "../Draw/Create";
import DrawUpdate from "../Draw/Update";
import DrawDelete from "../Draw/Delete";

import RaffleList from "../Raffle/List";
import RaffleCreate from "../Raffle/Create";
import RaffleUpdate from "../Raffle/Update";
import RaffleDelete from "../Raffle/Delete";

import ImageList from "../Images/List";
import ImageCreate from "../Images/Create";
import ImageUpdate from "../Images/Update";
import ImageDelete from "../Images/Delete";

import QuotasDrawList from "../Quotas_Draw/List";
import QuotasDrawCreate from "../Quotas_Draw/Create";
import QuotasDrawUpdate from "../Quotas_Draw/Update";
import QuotasDrawDelete from "../Quotas_Draw/Delete";

import Quotas_RaffleList from "../Quotas_Raffle/List";
import Quotas_RaffleCreate from "../Quotas_Raffle/Create";
import Quotas_RaffleUpdate from "../Quotas_Raffle/Update";
import Quotas_RaffleDelete from "../Quotas_Raffle/Delete";

import BusinessList from "../Business/List";
import BusinessCreate from "../Business/Create";
import BusinessUpdate from "../Business/Update";
import BusinessDelete from "../Business/Delete";

import BanksAccountList from "../BanksAccount/List";
import BanksAccountCreate from "../BanksAccount/Create";
import BanksAccountUpdate from "../BanksAccount/Update";
import BanksAccountDelete from "../BanksAccount/Delete";

import UsersCreate from "../Users/Create";
import UsersUpdate from "../Users/Update";
import UsersDelete from "../Users/Delete";

import ParticipantsDrawCreate from "../ParticipantsDraws/Create";
import ParticipantsDrawUpdate from "../ParticipantsDraws/Update";
import ParticipantsDrawDelete from "../ParticipantsDraws/Delete";

import WinnerDrawList from "../WinnerDraw/List";
import WinnerDrawCreate from "../WinnerDraw/Create";
import WinnerDrawUpdate from "../WinnerDraw/Update";
import WinnerDrawDelete from "../WinnerDraw/Delete";

import ParticipantsRaffleCreate from "../ParticipantsRaffles/Create";
import ParticipantsRaffleUpdate from "../ParticipantsRaffles/Upate";
import ParticipantsRaffleDelete from "../ParticipantsRaffles/Delete";

import WinnerRaffleList from "../WinnerRaffle/List";
import WinnerRaffleCreate from "../WinnerRaffle/Create";
import WinnerRaffleUpdate from "../WinnerRaffle/Update";
import WinnerRaffleDelete from "../WinnerRaffle/Delete";

import ReportsDraw from "../Reports/Draws";
import ReportsRaffle from "../Reports/Raffles";

import MyShopping from '../MyShopping'
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
export default function MenuComum() {
  const classes = useStyles();
  const [drawsOpen, setDrawsOpen] = React.useState(false);
  const [rafflesOpen, setRafflesOpen] = React.useState(false);
  const [winnersDraw, setWinnersDraw] = React.useState(false);
  const [winnersRaffle, setWinnersRaffle] = React.useState(false);
  const [participantsDraw, setParticipantsDraw] = React.useState(false);
  const [participantsRaffle, setParticipantsRaffle] = React.useState(false);
  const [reports, setReports] = React.useState(false);
  const [quotasDraws, setQuotasDraws] = React.useState(false);
  const [quotasRaffles, setQuotasRaffles] = React.useState(false);
  const [business, setBusiness] = React.useState(false);
  const [images, setImages] = React.useState(false);
  const [users, setUsers] = React.useState(false);
  const [banks, setBanks] = React.useState(false);
  const usertype: any = JSON.parse(`${sessionStorage.getItem("data")}`)?.type;

  const dispatch = useDispatch();

  const handleClickParticipantsDraw = () => {
    setParticipantsDraw(!participantsDraw);
  };

  const handleClickParticipantsRaffle = () => {
    setParticipantsRaffle(!participantsRaffle);
  };

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
    dispatch<Action>({ type: "set", state: DrawCreate });
  }
  function handlePageDrawUpdate() {
    dispatch<Action>({ type: "set", state: DrawUpdate });
  }
  function handlePageDrawDelete() {
    dispatch<Action>({ type: "set", state: DrawDelete });
  }
  function handlePageDrawList() {
    dispatch<Action>({ type: "set", state: DrawList });
  }

  function handlePageRaffleCreate() {
    dispatch<Action>({ type: "set", state: RaffleCreate });
  }
  function handlePageRaffleUpdate() {
    dispatch<Action>({ type: "set", state: RaffleUpdate });
  }
  function handlePageRaffleDelete() {
    dispatch<Action>({ type: "set", state: RaffleDelete });
  }
  function handlePageRaffleList() {
    dispatch<Action>({ type: "set", state: RaffleList });
  }
  function handlePageImageCreate() {
    dispatch<Action>({ type: "set", state: ImageCreate });
  }
  function handlePageImageUpdate() {
    dispatch<Action>({ type: "set", state: ImageUpdate });
  }
  function handlePageImageDelete() {
    dispatch<Action>({ type: "set", state: ImageDelete });
  }
  function handlePageImageList() {
    dispatch<Action>({ type: "set", state: ImageList });
  }
  function handlePageQuotasDrawCreate() {
    dispatch<Action>({ type: "set", state: QuotasDrawCreate });
  }
  function handlePageQuotasDrawUpdate() {
    dispatch<Action>({ type: "set", state: QuotasDrawUpdate });
  }

  function handlePageQuotasDrawDelete() {
    dispatch<Action>({ type: "set", state: QuotasDrawDelete });
  }
  function handlePageQuotasDrawList() {
    dispatch<Action>({ type: "set", state: QuotasDrawList });
  }
  function handlePageQuotas_RaffleCreate() {
    dispatch<Action>({ type: "set", state: Quotas_RaffleCreate });
  }
  function handlePageQuotas_RaffleUpdate() {
    dispatch<Action>({ type: "set", state: Quotas_RaffleUpdate });
  }

  function handlePageQuotas_RaffleDelete() {
    dispatch<Action>({ type: "set", state: Quotas_RaffleDelete });
  }

  function handlePageQuotas_RaffleList() {
    dispatch<Action>({ type: "set", state: Quotas_RaffleList });
  }

  function handleBusinessCreate() {
    dispatch<Action>({ type: "set", state: BusinessCreate });
  }

  function handleBusinessUpdate() {
    dispatch<Action>({ type: "set", state: BusinessUpdate });
  }
  function handleBusinessDelete() {
    dispatch<Action>({ type: "set", state: BusinessDelete });
  }

  function handleBusinessList() {
    dispatch<Action>({ type: "set", state: BusinessList });
  }
  function handleBanksAccountCreate() {
    dispatch<Action>({ type: "set", state: BanksAccountCreate });
  }
  function handleBanksAccountUpdate() {
    dispatch<Action>({ type: "set", state: BanksAccountUpdate });
  }

  function handleBanksAccountDelete() {
    dispatch<Action>({ type: "set", state: BanksAccountDelete });
  }
  function handleBanksAccountList() {
    dispatch<Action>({ type: "set", state: BanksAccountList });
  }

  function handleUsersCreate() {
    dispatch<Action>({ type: "set", state: UsersCreate });
  }

  function handleUsersUpdate() {
    dispatch<Action>({ type: "set", state: UsersUpdate });
  }
  function handleUsersDelete() {
    dispatch<Action>({ type: "set", state: UsersDelete });
  }

  function handleParticipantsDrawCreate() {
    dispatch<Action>({ type: "set", state: ParticipantsDrawCreate });
  }

  function handleParticipantsDrawUpdate() {
    dispatch<Action>({ type: "set", state: ParticipantsDrawUpdate });
  }

  function handleParticipantsDrawDelete() {
    dispatch<Action>({ type: "set", state: ParticipantsDrawDelete });
  }
  function handleWinnerDrawCreate() {
    dispatch<Action>({ type: "set", state: WinnerDrawCreate });
  }

  function handleWinnerDrawUpdate() {
    dispatch<Action>({ type: "set", state: WinnerDrawUpdate });
  }

  function handleWinnerDrawDelete() {
    dispatch<Action>({ type: "set", state: WinnerDrawDelete });
  }

  function handleWinnerDrawList() {
    dispatch<Action>({ type: "set", state: WinnerDrawList });
  }

  function handleParticipantsRaffleCreate() {
    dispatch<Action>({ type: "set", state: ParticipantsRaffleCreate });
  }

  function handleParticipantsRaffleUpdate() {
    dispatch<Action>({ type: "set", state: ParticipantsRaffleUpdate });
  }

  function handleParticipantsRaffleDelete() {
    dispatch<Action>({ type: "set", state: ParticipantsRaffleDelete });
  }

  function handleWinnerRaffleList() {
    dispatch<Action>({ type: "set", state: WinnerRaffleList });
  }
  function handleWinnerRaffleCreate() {
    dispatch<Action>({ type: "set", state: WinnerRaffleCreate });
  }
  function handleWinnerRaffleUpdate() {
    dispatch<Action>({ type: "set", state: WinnerRaffleUpdate });
  }
  function handleWinnerRaffleDelete() {
    dispatch<Action>({ type: "set", state: WinnerRaffleDelete });
  }
  function handleReportsDraw() {
    dispatch<Action>({ type: "set", state: ReportsDraw });
  }
  function handleReportsRaffle() {
    dispatch<Action>({ type: "set", state: ReportsRaffle });
  }

  function handleMyShopping(){
    dispatch<Action>({ type: "set", state: MyShopping });

  }
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      style={{ display: `${usertype === "comum" ? "block" : "none"}` }}
    >
      <ListItem button onClick={handleClickParticipantsDraw}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Sorteios" />{" "}
        {participantsDraw ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={participantsDraw} timeout="auto" unmountOnExit>
        <ListItem
          button
          className={classes.nested}
          onClick={handleParticipantsDrawCreate}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Participar" />
        </ListItem>
      </Collapse>

      <ListItem button onClick={handleClickWinnersDrawRaffles}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="G de Sorteios" />{" "}
        {winnersDraw ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={winnersDraw} timeout="auto" unmountOnExit>
        <ListItem
          button
          className={classes.nested}
          onClick={handleWinnerDrawList}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Ganhadores" />
        </ListItem>
      </Collapse>

      <ListItem button onClick={handleClickParticipantsRaffle}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Rifas" />{" "}
        {participantsRaffle ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={participantsRaffle} timeout="auto" unmountOnExit>
        <ListItem
          button
          className={classes.nested}
          onClick={handleParticipantsRaffleCreate}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Participar" />
        </ListItem>
      </Collapse>

      <ListItem button onClick={handleClickWinnersRaffles}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="G de Rifas" />{" "}
        {winnersRaffle ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={winnersRaffle} timeout="auto" unmountOnExit>
        <ListItem
          button
          className={classes.nested}
          onClick={handleWinnerRaffleList}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Ganhadores" />
        </ListItem>
      </Collapse>

      <ListItem button onClick={handleMyShopping}>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Minhas Compras" />
      </ListItem>
      <ListItem button onClick={handleClickBanks}>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Pagamento" />{" "}
        {banks ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={banks} timeout="auto" unmountOnExit>
        <ListItem
          button
          className={classes.nested}
          onClick={handleBanksAccountList}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Contas" />
        </ListItem>
      </Collapse>
      <ListItem button className={classes.nested}>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItemText primary="Sair" />
        </a>
      </ListItem>
    </List>
  );
}
