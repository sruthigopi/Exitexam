import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
       <AppBar position="static" color="primary" style={{ top: 'auto', bottom: 0, width: '100%' }}>
      <Toolbar>
        <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} Sruthi's recipee. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Footer