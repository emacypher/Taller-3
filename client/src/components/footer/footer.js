import React from "react";
import { useHistory } from "react-router-dom";
import style from './footer.module.css'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    backgroundColor: '#010102',
    marginTop: 50,
    top: "auto",
    bottom: 0,
    paddingTop: 40,
       
  },
  toolbar: {
    display: "flex",
    marginBottom: "2rem",
    
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

const Footer = () => {
  const classes = useStyles();
  var history = useHistory();
  return (
    <AppBar  position="fixed" color="primary" className={classes.appBar}>
      <Toolbar  className={classes.toolbar}>
        <MenuItem   onClick={() => history.push("/about")}>
          Sobre Nosotros      
        </MenuItem>
        <MenuItem  onClick={() => history.push("/pc")}>
          Armar Pc   
        </MenuItem>
        <MenuItem onClick={() => history.push("/foroum")}>
          Foro   
        </MenuItem>
        
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
