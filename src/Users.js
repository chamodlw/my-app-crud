import React from 'react'
import { Userform } from './Userform'
import { Usertable } from './Usertable';
import { Box } from '@mui/material';

const users =[
  {
  id:1,
  name:'Prasad',
  },
  {
  id:2,
  name:'Prasadi',
  }
];

export const Users = () => {
  return (
    <Box sx={{width:'calc(100%-100px)', margin:'auto'} }>
      <Userform/>
      <Usertable rows ={users}/>
    </Box>
  )
}
