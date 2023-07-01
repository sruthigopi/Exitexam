import React from 'react'
import image1 from '../images/img1.jpg' ;
import { Typography } from '@mui/material'
const Home = () => {
  return (
    <div>
     <img src={image1}  style={{height:'100vh',width:'100%',paddingBottom:'0px'}}/>  
     <Typography
        variant="h6"
        component="div"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize:'50px',
          color: 'white',
        }}
      >
        Unlock the Flavors of Success: Your Ultimate Recipe Companion!
      </Typography>  
    </div>
  )
}

export default Home