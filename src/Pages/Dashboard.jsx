import { Grid, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { UserContext } from '../contexte/UserContexte'
import { themes } from '../Themes/themes'
import { useContext } from 'react'
export default function Dashboard() {
  const context = useContext(UserContext);
  const user = localStorage.getItem('user');
  return (
    <UserContext.Provider value={user}>
    <ThemeProvider theme =  {themes}>
    <Grid container sx= {{wrap : 'wrap'}}>
        <Grid item xs={2}>
            <Sidebar></Sidebar>
        </Grid>
        <Grid container item xs={10}>
            <Grid item xs={12} sx={{height: '10vh'}}>
                <Header></Header>
            </Grid>
            <Grid item xs={12} sx={{height :'90vh'}}>
                <Outlet/>
            </Grid>
        </Grid>
    </Grid>
    </ThemeProvider>
    </UserContext.Provider>
  )
}
