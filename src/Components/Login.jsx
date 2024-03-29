import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { url } from '../api/config';
import { useForm } from 'react-hook-form';
import { FormInputText } from '../feature/InputText';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
const defaultValue = {
  username:"",
  password:""
}
export default function SignIn() {
  const [isLoading,setIsLoading] = React.useState(false);
<<<<<<< HEAD
  // const [data, setData] = React.useState(null);
=======
  const [response, setResponse] = React.useState(null);
  const [data,setData] = React.useState(null);
>>>>>>> 54d7e2385d891d3a96fc79f098f86ec4c8ed862b
  const [error,setError] = React.useState(null);
  const {handleSubmit,reset,control,setValue} =  useForm({defaultValues:defaultValue});
  const navigate = useNavigate();
  const onSubmit = (data) => {
    ( async()=>{
      setIsLoading(true);
        try {
          const response = await axios.post(url+'/auth/login',data);
          // console.log(response);
          // setIsLoading(false);
          if(response.data.success){
            navigate('/dashboard');
          }else{
            alert(response.data.message);
          }
          
        } catch (error) {
          console.log(error);
        }
    } )();
    reset();
  };

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" className = "textee">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <FormInputText
              id="username"
              label="Username"
              type="text"
              name="username"
              control={control}
            />
            <FormInputText
              id="password"
              label="Password"
              type="password"
              name="password"
              control={control}
            />
            {data?.password ===''? <small>Veuillez remplir ce champ</small> : ''}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
             {response?.succes===false ? <small>{response.message}</small> : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}