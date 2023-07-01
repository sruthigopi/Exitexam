import React, { useEffect, useState } from 'react'
import {  Button,Grid,Card, CardMedia, CardContent, Typography } from '@mui/material';
import axios from "axios"
import '../style.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom'
import AddItalian from './AddItalian';

const ViewItalian = () => {
 
    var [recipee,setRecipee]=useState([])
    var [update ,setUpdate] =useState(false);
    var [singleValue ,setSingleValue] =useState([])

    useEffect(()=>{
        axios.get('http://localhost:3008/viewita')
        .then((response)=>{
            setRecipee(response.data)
            console.log(response.data)
        })
    },[])

    //   delete value  
var deleteValues =(id)=>{
    console.log(id);
    axios.delete("http://localhost:3008/deleteita/"+id)
    .then((response)=>{
        alert("Cuisine Deleted Sucessfully");
        window.location.reload(false)
    })
    .catch(err=>console.log(err))
    }

    // update values
    const updateValues =(value) =>{
        console.log("Update clicked");
    setUpdate(true);
    setSingleValue(value)
    }

    var finalJSX =
    
    <Grid container spacing={2} style={{paddingBottom:"80px"}}>   
    <Grid item xs={12}>
        <Button variant="contained" color="primary"style={{marginTop:'90px'}} >
        <Link to={'/addita'} style={{textDecoration:'none',color:'white'}}>Add Cuisine</Link>   
        </Button>
      </Grid>
    {recipee.map((val,i) =>{ 
       return(
           (
               <Card key={i} sx={{ width: '21%' }} className='ca1'>
                 <CardMedia
                   component="img"
                   height="140"
                   image={val.Image}
                   alt={val.Title}
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     {val.Title}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                   <AccessTimeIcon /> <span style={{marginLeft:'0.5rem'}}>{val.Duration}</span>
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                   <PeopleAltIcon/> <span style={{marginLeft:'0.5rem'}}> {val.Number}</span>
                   </Typography>
                   <Button variant='contained' style={{backgroundColor:'red'}} onClick={()=>deleteValues(val._id)}>Delete</Button>
                   &nbsp;&nbsp;
                   <Button variant='contained' style={{backgroundColor:'yellow',color:'black'}} onClick={()=>updateValues(val)}>Edit</Button> </CardContent>
               </Card>
             )
       )
    })}
    </Grid>
 if(update) finalJSX =<AddItalian data={singleValue} method='put' />
 return finalJSX
}

export default ViewItalian