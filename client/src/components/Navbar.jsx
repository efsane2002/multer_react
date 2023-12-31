import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Style from "./index.module.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Multer+React/Node
        </Typography>
        <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to='/'>Images</Link></Button>
        <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to='/add-image'>Add Image</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar