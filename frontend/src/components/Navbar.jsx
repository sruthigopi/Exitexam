import React from 'react'
import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <div>
        <AppBar >
           <Toolbar style={{backgroundColor:'#92a8d1'}}>
           <img src={logo} alt="Logo" style={{height:'50px',width:'50px'}} /> &nbsp;&nbsp;
            <Typography variant='h4' style={{color:'white',fontFamily:'cursive', paddingRight:'520px'}}>Sruthi's Recipe</Typography>
           
            <Button variant='contained' style={{marginRight:'50px'}}><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button> 
         <Button variant='contained' style={{marginRight:'50px'}}><Link to={'/ind'} style={{textDecoration:'none',color:'white'}}>Indian</Link></Button> 
         <Button variant='contained' style={{marginRight:'50px'}}><Link to={'/italian'} style={{textDecoration:'none',color:'white'}}>Italian</Link></Button>
       
          
           </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar