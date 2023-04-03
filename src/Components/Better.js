import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import card from "../images/card.png";
import apple from "../images/apple.svg";
import google from "../images/google.svg";



function Better() {
  return (
    <div>
           <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}}>
                <br/><br/>
                <Container>
                    <Grid container spacing={2} style={{display:"flex" ,alignItems:'center'}}>
                       
                        <Grid lg={4.5} paddingLeft={2} style={{textAlign:'start'}}>
                            <Typography variant='h3' color='white'>Find a better card deal in few easy steps.</Typography>
                            <Typography variant='body-2' marginTop={4} color='#ffffffb3'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</Typography>
                            <Grid marginTop={4}>
                            <Button variant='contained' sx={{backgroundColor:"#00eeff"}}>Get Started</Button>

                            </Grid>
                           
                            </Grid>
                            <Grid lg={6.5}>
                         <img src={card} alt='..' width="100%" height={600}></img>
                        </Grid>
                    </Grid>
                </Container>
               </Box>
    </div>
  )
}

export default Better