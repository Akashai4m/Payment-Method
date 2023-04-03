import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import robot from "../images/robot.png";
import { Typography } from '@mui/material';

function Header() {
  return (
    <div>
          <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}} >
           <Container>
            <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"space-between" ,alignItems:"center"}}>
                   <Grid lg={5} textAlign='start' paddingLeft={2} >
                      <Typography variant='body-2' marginTop={2} color='#ffffffb3' className='bg-discount-gradient' >20% DISCOUNT FOR ONE MONTH ACCOUNT</Typography>
                      <Typography variant='h2' marginTop={2} color='white'>The Next <br/><span className='text'>Generation</span> <br/>Payment Method</Typography>
                      <Typography variant='h6' marginTop={6} color='#ffffffb3'>Our Team Of experts Uses a Mthodology to identify the credit cards most likely to fit your needs.We examine annual Percentage rates ,annual fees</Typography>
                   </Grid>
                   <Grid lg={5}  >
                    <img  src={robot} width="100%" height='100%' alt='...' ></img>
                   </Grid>
               </Grid>
           
               </Container>
          </Box>
          
          <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}}>
          <br/><br/>
            <Container>
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:'space-evenly'}}>
                    <Grid letterSpacing={3.5}>
                     <Typography variant='h4' color='white' style={{display:'flex' ,alignItems:"center"}}>3800 + <span style={{fontSize:"16px" ,color:"#00eeff"}}>USER ACTIVE  </span>  </Typography>
                    </Grid>
                    <Grid letterSpacing={3.5}>
                    <Typography variant='h4' color='white' style={{display:'flex' ,alignItems:"center"}}>230 + <span style={{fontSize:"16px" ,color:"#00eeff"}}>Trusted By Company  </span>   </Typography>  
                    </Grid>
                    <Grid letterSpacing={3.5}>
                    <Typography variant='h4' color='white' style={{display:'flex' ,alignItems:"center"}}>$230M + <span style={{fontSize:"16px" ,color:"#00eeff"}}>  Transactions</span></Typography>  
                     </Grid>
                    </Grid>
            </Container>
          </Box>
    </div>
  )
}

export default Header