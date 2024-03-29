//Userform.js
import React, { useEffect, useState } from 'react'
import {Grid, Input, Button, Typography} from '@mui/material'

export const Userform = ({ addUser,updateUser , submitted,data,isEdit }) => {

    const [id, setId]= useState(0);
    const [name, setName]= useState('');

    useEffect(()=>{
        if(!submitted){
            setId(0);
            setName('');
        }
    },[submitted]);

    useEffect(() =>{
        if(data && data.id && data.id !== 0){
            setId(data.id);
            setName(data.name)
        }
    },[data]);

  return (
    <Grid container spacing={2}
    sx={{backgroundColor:'#FFFFFF', marginBottom:'30px',display:'block'}}
    >
        <Grid item xs={12}>
            <Typography component={'h1'} sx={{color:'#000000'} }>
            Userform
            </Typography>

        </Grid>
        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography component={'label1'} htmlFor='id' 
            sx={{
                color:'#000000',
                marginRight:'20px',
                fontSize:'16px',
                width:'100px',
                display:'flex'
                }}>
                    ID
            </Typography>
            <Input 
            type='number' 
            id='id'
            name='id'
            sx={{widows:'400px'}}
            value={id}
            onChange={e=>setId(e.target.value)}/>

        </Grid>
        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography component={'label1'} htmlFor='id' 
            sx={{
                color:'#000000',
                marginRight:'20px',
                fontSize:'16px',
                width:'100px',
                display:'bock'
                }}>
                    Name
            </Typography>
            <Input 
            type='text' 
            id='name'
            name='name'
            sx={{widows:'400px'}}
            value={name}
            onChange={e=>setName(e.target.value)}/>

        </Grid>
        <Button sx={{
            margin:'auto',
            marginBottom:'20px',
            backgroundColor:'#00FFFF',
            color:'#000000',
            marginLeft:'15px',
            marginTop:'20px',
            '&:hover':{
                opacity:'0.7',
                backgroundColor:'#00FFFF'
            }
        }} onClick={() => isEdit? updateUser({id , name}) : addUser({ id ,name })}>
            {
                isEdit ? 'Update' : 'Add'
            }
        </Button>
    </Grid>
  )
}
