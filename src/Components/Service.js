import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

function Service() {
  return (
    <div>
         <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}}>
            <br/><br/><br/>
            <Container className='service' style={{borderRadius:"16px" ,textAlign:'start'}}><br/>
            <Typography variant='h3' color='white'>Let’s try our service now!</Typography><br/>
            <Grid  container sx={{display:"flex"}}>
            <Grid xs={12} sm={12} md={6} lg={10}>
            <Typography variant='h7' color='#ffffffb3'>Everything you need to accept card payments and grow your business anywhere on the planet.</Typography>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={2} marginBottom={2} marginTop={2}>
           <Button size='large' style={{backgroundColor:"#00eeff" ,color:"BLACK" ,borderRadius:"16px"}}>Get Started</Button>
            </Grid><br/><br/><br/>
            </Grid>

            </Container>
<br/><br/>
           
        </Box>
    </div>
  )
}

export default Service