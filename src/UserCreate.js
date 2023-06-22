import React,{ useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { MuiFileInput } from 'mui-file-input'
//import minio aws
var AWS = require('aws-sdk');

export default function UserCreate() {


  const [file, setFile] = React.useState(null)
  const handleup = (newFile) => {
    setFile(newFile)
    //console.log(newFile)
    //console.log(newFile.name)
    //console.log(newFile.size)
    //console.log(animal)
  }
 

const handleSubmit = event =>{
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "fname": ffname,
        "lname": llname,
        "username": uusername,
        // "password": password,
        "email": eemail,
        "avatar": aavatar
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://www.melivecode.com/api/users/create", requestOptions)
        .then(response => response.json())
        .then(result => {
            //alert(result['message'])
            if(result['status']==='ok')
            window.location.href = ''
        })
        .catch(error => console.log('error', error));

        //Minio
        const s3  = new AWS.S3({
          accessKeyId: 'yainakrub2' ,
          secretAccessKey: 'yainakrub2' ,
          endpoint: 'http://192.168.10.19:9000' ,
          s3ForcePathStyle: 'true', // needed with minio?
          //signatureVersion: 'v4'
        });

        alert(file.name);
        //console.log(file.name)
        const params = {Bucket: 'yai', Key: file.name, Body: file};

        s3.putObject(params, function(err, data) {
        if (err)
        console.log(err)
        else   
        console.log("Successfully uploaded data to testbucket/testobject");
        });
        //end minio
   
      
       
}

const [UUpload,setUpload]= useState(null);
const [ffname,setFname]= useState('');
const [llname,setLname]= useState('');
const [uusername,setUsername]= useState('');
const [eemail,setEmail]= useState('');
const [aavatar,setAvatar]= useState('');



//alert(ffname);
//alert(llname);



  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p:2}}>
       

        <Typography variant="h6" gutterBottom component="dev">ตารางผู้ใช้งาน </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}> <TextField id="ffname" label="ชื่อ" variant="outlined" fullWidth required onChange={(e)=> setFname(e.target.value)} />
    </Grid>
                <Grid item xs={12}><TextField id="llname" label="นามสกุล" variant="outlined" fullWidth required onChange={(e)=> setLname(e.target.value)} /></Grid>
                <Grid item xs={12}><TextField id="uusername" label="Username" variant="outlined" fullWidth required onChange={(e)=> setUsername(e.target.value)} /></Grid>
                <Grid item xs={12}><TextField id="eemail" label="Email" variant="outlined" fullWidth required onChange={(e)=> setEmail(e.target.value)} /></Grid>
                <Grid item xs={12}><TextField id="aavatar" label="Avatar" variant="outlined" fullWidth required onChange={(e)=> setAvatar(e.target.value)} /></Grid>
            </Grid>

            <MuiFileInput value={file} onChange={handleup} />

            {/* <TextField value={file} type='file' /> */}

            <Box maxWidth="sm" sx={{p:1}}><Button type='submit' variant="contained">Add รายการ User</Button></Box>

            
        </form>

            {/* <Box><Link href="User"><Button variant="outlined">รายการ User</Button></Link> </Box> */}
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}


        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
            </InputLabel>
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            }
            />
      </FormControl>


  

      </Container>
    </React.Fragment>
  );
}