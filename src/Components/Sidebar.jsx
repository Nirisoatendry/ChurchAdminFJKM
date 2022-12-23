import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { display, flexbox } from "@mui/system";
import { Link, url } from "react-router-dom";
import { themes } from "../Themes/themes";
const useStyles = makeStyles((theme)=>({
    linkList :{
        marginTop : '4vh',
        height : '70vh',
    },
    linkItem : {
        height : 'max-content',
        display : 'flex',
        justifyContent : 'center',

    },
    linkUrl : {
        textDecoration : 'none',
        border : '1px solid #e4aec5',
        borderRadius : '20px',
        width:"95%",
        color : 'white',
        textAlign:'center',
        padding:'10px',

        "&:hover" :{
          background: '#e4aec5',
          transition:'0.8s',
          color:'#111',
          marginLeft:'1.5em',
          boxShadow: '0 3px 3px 0 rgb(151, 150, 150)'
      }
    }, 
    container: {
      background : '#111',
      height : '100vh',
      opacity : 0.8
    },
    logo : {
        textDecoration : 'none'
    }
}))
var Links = [
  {
    id: 0,
    text: "Lisitry ny mpivavaka",
    url: "/dashboard/listes",
  },
  {
    id: 1,
    text: "Hampiditra",
    url: "/dashboard/ajout",
  },
  {
    id: 2,
    text: "Sampana",
    url: "/dashboard/sampana",
  },
  {
    id: 3,
    text: "Rantsana sy Antoko mpihira",
    url: "/dashboard/rantsana",
  },
  {
    id: 4,
    text: "Asa sy sampan'asa",
    url: "/dashboard/asa",
  },
  {
    id: 5,
    text: "Taranaka",
    url: "/dashboard/taranaka",
  },
];
function Sidebar() {
    const sidebar = useStyles(themes);
    console.log(themes)
  return (
    <Grid container className={sidebar.container} >
      <Grid item xs={12}>
        <Link className={sidebar.logo}>Logo FJKM </Link>
      </Grid>
      <Grid item xs={12}>
        <Grid container  className={sidebar.linkList}>
          {Links.map((link, id) => {
            return (
              <Grid item xs={12}  key={id} className={sidebar.linkItem}>
                <Link to={link.url} className = {sidebar.linkUrl}>
                  {link.text}
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
