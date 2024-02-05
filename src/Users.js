import React, { useEffect } from 'react'
import { Userform } from './Userform'
import { Usertable } from './Usertable';
import { Box } from '@mui/material';
import { useState } from "react";
import  Axios  from 'axios';


export const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] =useState(false);
  const [selectedUser,setSelectedUser] =useState({});
  const [isEdit,setIsEdt] = useState(false);

  useEffect(() =>{
    getUsers();
  },[]);

  const getUsers= () =>{
    Axios.get('http://localhost:3010/api/users')
      .then(response =>{
        setUsers(response.data?.response || []);
      })
      .catch(error => {
        console.error("Axios error:",error);
        });
      
  }

  const addUser= (data) =>{
    setSubmitted(true);

    const payload = {
      id :data.id,
      name :data.name,
    }

    Axios.post('http://localhost:3010/api/createuser',payload)
      .then(response =>{
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch(error => {
        console.error("Axios error:",error);
        });
      
  }

  const updateUser= (data) =>{
    setSubmitted(true);

    const payload = {
      id :data.id,
      name :data.name,
    }

    Axios.post('http://localhost:3010/api/updateuser',payload)
      .then(response =>{
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch(error => {
        console.error("Axios error:",error);
        });
      
        
  }

  return (
    <Box sx={{width:'calc(100%-100px)', margin:'auto'} }>
      <Userform
      addUser={addUser}
      submitted={submitted}
      data={selectedUser}
      isEdit={isEdit}
      />
      <Usertable 
      rows ={users}
      selectedUser={data =>{
        setSelectedUser(data);
        setIsEdit(true);
    }}
        />
    </Box>
  )
};