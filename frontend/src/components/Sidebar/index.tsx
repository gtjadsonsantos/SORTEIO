import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Collapse from "@material-ui/core/Collapse"
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';


export function ManuAdmin(){
  
  
  return (<List>
    <ListItem button >
     <ListItemText primary="Sorteios" /> 
    </ListItem>
  <Collapse in={true}>
    <ListItem style={{paddingLeft: "40px"}} button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Lançar Sorteio" />
    </ListItem>
    <ListItem style={{paddingLeft: "40px"}} button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Excluir Sorteio" />
    </ListItem>
    <ListItem style={{paddingLeft: "40px"}} button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Atualizar Sorteio" />
    </ListItem>
    <ListItem style={{paddingLeft: "40px"}} button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Sorteios" />
    </ListItem>
    </Collapse>
    </List>

)};

export const MenuUsers = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);