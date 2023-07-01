import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
import '../style.css'
import { useNavigate } from "react-router-dom";


const AddData = (props) => {
    var navigate = useNavigate();
  console.log("props data",props.data);
console.log("props data",props.method)

var [inp,setInp]=useState(props.data);

  const inputHandler =(e)=>{
    const {name,value} =e.target;
    setInp((inp)=>({...inp,[name]:value}));
    console.log(inp)
  }

  const readHndler =()=>{
console.log("clicked");
if(props.method === "post"){
axios.post("http://localhost:3008/addrecipee",inp)
.then((response)=>{
  alert("Cuisine Added Successfully");
  navigate("/ind");
})
.catch(err=>console.log(err));
  }
  if(props.method==="put"){
    axios.put("http://localhost:3008/editrecipee/"+inp._id,inp)
    .then((response)=>{
      alert("Cuisine Updated Successfully");
      window.location.reload(false);
    })
  }
}
  return (
    <div className='all'  >
      <Typography variant='h4' style={{color:'red',fontFamily:'cursive'}}>Add Indian Cuisine</Typography>
      <div className='frw' >
   <div className='fst'>
    <span className='scd'>Cuisine Name</span>   <TextField name='Title' value={inp.Title} onChange={inputHandler}/> 
  <span className='scd'>Duration for cooking</span>  <TextField  name='Duration' value={inp.Duration} onChange={inputHandler}/> 
   </div> 

   <div className='fst'>
    <span className='scd'> Number of servings</span>  <TextField name='Number' value={inp.Number} onChange={inputHandler}/>
   <span className='scd '>image </span> <TextField name='Image' value={inp.Image} onChange={inputHandler}/>
   </div>   
   </div>
   <Button variant='contained' onClick={readHndler}>Submit</Button>
    </div>
  )
}

export default AddData