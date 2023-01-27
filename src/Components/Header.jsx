import React, { useContext, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import {AppBar,Toolbar,Avatar,Box,Divider,IconButton,List,ListItem,ListItemIcon,ListItemText,makeStyles,CssBaseline,Drawer,Typography,} from "@material-ui/core";
import {Apps, Menu,ContactMail,AssignmentInd,Home,} from "@material-ui/icons";
import { UserContext } from "../contexte/UserContexte";
 
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#111",
    opacity: '0.8',
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  listItem: {
    color: "#FFF",
  },
  user : {
    width: '100%',
    display: 'flex',
    justifyContent : 'end',
    color : 'black',
    cursor : 'pointer'

  },
  header:{
    background :'white'
    
  }
}));

const listItems = [
  {
    listIcon: <AssignmentInd />,
    listText: "Se Deconnecter",
  },

  {
    listIcon: <ContactMail />,
    listText: "Nouveau Utilisateur",
  },
];

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const context = useContext(UserContext)
  console.log(context)
  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button key={index}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <Box component="div" >
        <AppBar position="static">
          <Toolbar className ={classes.header}>
            <Box onClick={toggleSlider} className={classes.user}>
              <AccountCircleIcon>
              </AccountCircleIcon>
              <Typography> {context}</Typography>
            </Box>
         
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
