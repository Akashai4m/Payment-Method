import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../images/logo.svg";
import { Container } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor:"#000"}}>
        <Container>
      <AppBar position="static" p={0} m={0} style={{backgroundColor:"#000"}} >
        <Toolbar >
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:"left" }} p={0} m={0}>
            <img src={logo} alt="..." width={128} height={128}></img>
          </Typography>
          <Button color="inherit">Home</Button>
           <Button sx={{ display: { xs: 'none' ,lg:"block"  } }} color="inherit">AboutUs</Button> 
           <Button sx={{ display: { xs: 'none' ,lg:"block"  } }} color="inherit">Features</Button>
            <Button sx={{ display: { xs: 'none' ,lg:"block"  } }} color="inherit">Solution</Button>
        </Toolbar>
      </AppBar>
      </Container>
    </Box>
  );
}