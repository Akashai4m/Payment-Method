import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import bill from "../images/bill.png";
import apple from "../images/apple.svg";
import google from "../images/google.svg";





function Biling() {
  return (
    <div>
               <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}}>
                <br/><br/>
                <Container>
                    <Grid container spacing={2} style={{display:"flex" ,alignItems:'center'}}>
                        <Grid lg={6.5} paddingLeft={1}>
                         <img src={bill} alt='..' width="100%" height={600}></img>
                        </Grid>
                        <Grid lg={5} paddingLeft={2} style={{textAlign:'start'}}>
                            <Typography variant='h3' color='white'>Easily Control your biling and invoicing</Typography>
                            <Typography variant='body-2' marginTop={4} color='#ffffffb3'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</Typography>
                            <Grid marginTop={4}>
                                <img src={apple} alt='..'></img>
                                <img src={google} alt='..'></img>

                            </Grid>
                            </Grid>
                    </Grid>
                </Container>
               </Box>
    </div>
  )
}

export default Biling