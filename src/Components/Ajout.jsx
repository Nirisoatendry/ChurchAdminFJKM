import * as React from 'react';
import { Box, FormControl, FormControlLabel, Grid ,FormLabel,FormGroup, Typography, Button} from "@mui/material";
// import DropDown from "../feature/Dropdown";
import { donnee } from "../data/db";
import {InputMultiCheckbox} from "../feature/Checkbox";
import {InputRadio} from "../feature/RadioCheck";
import { FormInputText } from '../feature/InputText';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ajout } from '../api/fetch';
import { url } from '../api/config';
// import useFetch from '../hook/useFetch';
const defaultValue = {
  nom: '',
  prenom :'',
  date:'',
  lieu:'',
  profession:'',
  sexe:'',
  situation:'',
  adresse:'',
  email:'',
  faritra:'',
  batisa:'',
  mpandray:'',
  andraikitra:'',
  taranaka:'',
  sampana:'',
  rantsana:'',
  asa:'',
  vadiny:''
}
export default function Ajout({id,set,titre,setTitre}) {
  // const [id,setStateId] = React.useState(ids);
  const {handleSubmit,reset,control,setValue} = useForm({defaultValues:id==0 && titre=='Dada'?{nom:'',prenom:'',sexe:0,situation:1}:defaultValue});
  const [forms,setForms] = useState(0);
  const [suivant,setSuivant] = React.useState(false);
  const navigate = useNavigate();
  // const [titre,setTitre] = React.useState("RAD");
  var result ;
  if(id==2){
    setTitre('');
  }
  const handleSuivant = (data)=>{
    // envoyer data (zanaka
    // vider les champs
    // console.log("suivant",data);
    const id_neny = localStorage.getItem("id_neny")
    const id_dada = localStorage.getItem("id_dada")
    console.log(id_neny,id_dada);
    (async()=>{
      try {
        const res= await ajout(url+"/ajout/ankehitriny/zanaka",{...data,id_neny:id_neny,id_dada:id_dada});
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
    // reset();
  };
  const OnSubmit= (data)=>{
    // setForms(data)
    (async ()=>{
        try {
          let resp = 0
          if(titre=='Dada'){
            //Envoyer donner RAD eto
            if(id==0){// nodimandry
              // setStateId(2);
              // set(1)
               resp = await ajout(url+"/ajout/nodimandry/dada",data);
            }else{ //ankehitriny
               resp = await ajout(url+"/ajout/ankehitriny/dada",data);
            }
            // console.log(resp.data.data)
            localStorage.setItem("id_dada",resp.data.insertId);
            setTitre('Neny');
          }else if(titre=='Neny') {
            //Envoyer donner Zanaka eto
            console.log(data)
            resp = await ajout(url+"/ajout/ankehitriny/neny",data);
            // localStorage.setItem("id_neny",resp.data.insertId);
            console.log(resp)
            // setTitre("Zanaka")
          }else{
              // const resp = await ajout(url+"/ajout/nodimandry/zanaka",data);
              navigate('/dashboard/listes');
          } 
        } catch (error) {
          console.log(error)
        }
    })()
    setSuivant(true);
    reset();
  }
  return (
    <Box component="form" sx={{margin:'20px',maxHeight:'65vh',overflowY:'scroll'}}>
      <Typography  variant="h4">Remplir le formulaire ( {titre} ) </Typography>
      <Grid container spacing={1}>
        <Grid container item xs={12}  spacing={1}>
          <Grid item xs={id==1 || id==2 || titre=="Neny" || titre=="Zanaka"?5:6}>
            <FormInputText id="outlined-basic" label="Nom" name='nom' type='text' control={control}/>
          </Grid>
          <Grid item xs={id==1 || id==2 || titre=="Neny" || titre=="Zanaka"?3:6}>
            <FormInputText id="outlined-basic" label="Prenoms"  type='text' name='prenom' control={control}/>
          </Grid>
          {
            id==1 || id==2 || titre=="Neny" || titre=="Zanaka" ?(
              <Grid  container item xs={4} spacing={1}>
             <Grid item xs={5} >
                <FormInputText id="outlined-basic" label=""  type='date'  name='date' control={control}/>
             </Grid>
             <Grid item xs={7}>
              <FormInputText id="outlined-basic" label="Lieu" type='text' name='lieu' control={control}/>
             </Grid>
          </Grid>
            ):null
          }
        </Grid>
        <Grid container item xs={12}  spacing={1}>
         {
          id==1 || id==2 || titre=="Neny" || titre=="Zanaka"?(
            <Grid item xs={5}>
            <FormInputText id="outlined-basic" label="Profession" type='text' name='profession' control={control} />
          </Grid>
          ):null
         }
          <Grid item xs={id==1 || id==2 || titre=="Neny" || titre=="Zanaka"?3:4}>
            <InputRadio setValue={setValue}  control={control} label={'Sexe'} options={donnee.sexe} name='sexe' />
          </Grid>
          <Grid item xs={id==1 || id==2 || titre=="Neny" || titre=="Zanaka"?3:4}>
            <InputRadio setValue={setValue}  control={control} label = {'Situation Matrimoniale'} options = {donnee.situation} name='situation'/>
          </Grid>

        </Grid>
        {
          id==1 || id==2 || titre=="Neny" || titre=="Zanaka"?(
            <>
             <Grid container item xs={12}  spacing={1}>
              <Grid item xs={4}>
                <FormInputText id="outlined-basic" label="Adresse" type='text'  name='adresse' control={control}/>
              </Grid>
              <Grid item xs={4}>
                <FormInputText id="outlined-basic" label="Email"  type="mail" name='email' control={control}/>
              </Grid>
              <Grid item xs={4}>
                <FormInputText id="outlined-basic" label="Andraikitra"  type="text" name='andraikitra' control={control}/>
              </Grid>
              <Grid   item xs={2} spacing={1}>
                  {/* <DropDown titre = {'Faritra'} options = {donnee.faritra} name='faritra' /> */}
              </Grid>
            </Grid>
             <Grid container item xs={12}  spacing={1}>
                <Grid item xs={4}>
                  <InputRadio setValue={setValue}  control={control} label = 'Batisa' options = {donnee.batisa} name='batisa'/>
                </Grid>
                <Grid item xs={4}>
                  <InputRadio setValue={setValue}  control={control} label = 'Mpandray' options = {donnee.mpandray} name='mpandray'/>
                  </Grid>
                  <Grid item xs={4} spacing={1}>
                    <InputRadio setValue={setValue}  control={control} label = 'Taranaka' options = {donnee.taranaka} name='taranaka'/>
                  </Grid>
              </Grid>
              <Grid container item xs={12}  spacing={1} >
              <Grid container item xs={6}>
                <Grid item xs={6}>
                  <InputMultiCheckbox  setValue={setValue} control={control} label= 'Sampana' options = {donnee.sampana} name='sampana'/>
                </Grid>
                <Grid item xs={6}>
                  <InputMultiCheckbox  control={control}  setValue={setValue} label = '...' options = {donnee.sampana2} name='sampana'/>
                </Grid>
              </Grid>
              <Grid item xs={3} spacing={1}>
                <InputMultiCheckbox  control={control}  setValue={setValue} label = 'Rantsana sy Antoko Mpihira' options = {donnee.rantsana} name='rantsana'/>
              </Grid>
              <Grid item xs={3} spacing={1}>
                <InputMultiCheckbox  control={control}  setValue={setValue} label = "Asa sy sampan'asa" options = {donnee.asa} name='asa'/>
              </Grid>
        </Grid>
            </>
           
          ):null
        }
      </Grid>
      <Grid container>
          <Grid item xs={4}>
            <Button onClick={handleSubmit(OnSubmit)} variant='contained' color="custom">Terminer</Button>
          </Grid>
          {/* <Grid item  xs={4}>
            <Button onClick={handleSubmit(OnSubmit)}  variant='contained' color='secondary' >Ajouter</Button>
          </Grid> */}
          {
           titre=="Zanaka" ? (
            <Grid item xs={4}>
              <Button onClick={handleSubmit(handleSuivant)}   variant='contained' color='primary'  >Suivant</Button>
            </Grid>
            ):null
          }
          
      </Grid>
    </Box>
  );
}
