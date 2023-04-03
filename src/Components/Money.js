import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

function Money() {
  return (
    <div>
        <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}}>
            <br/><br/>
            <Container>
                <Grid container spacing={2} sx={{display:"flex" , justifyContent:'space-between', alignItems:'center'}}>
                    <Grid lg={6} marginTop={2} paddingLeft={2} style={{textAlign:'start'}}>
                       <Typography marginTop={2} variant='h2' color='white'>You do the Business we'll handle the money.</Typography>
                       <Typography variant='h8' marginTop={2} color='#ffffffb3'>with the right credit card ,you can improve your financial life by building credit ,earning rewards and saving money ,but with hundreds of credit cards on the market.</Typography>
                       <Grid marginTop={3}>
                        <Button variant='contained' sx={{backgroundColor:"#00eeff"}}>Get Started</Button>
                       </Grid>
                    </Grid>
                    <Grid marginTop={2} paddingLeft={2}lg={5}>
                        <Grid marginTop={2} style={{textAlign:'start'}}>
                         <Typography marginTop={1} variant='h6' color='white'>Rewards</Typography>
                         <Typography variant='h8' marginTop={1} color='#ffffffb3'>The Best Credit cards after some tantalising combinations of Promotions and prizes</Typography>
                        </Grid>
                        <Grid marginTop={2} style={{textAlign:'start'}}>
                        <Typography marginTop={1} variant='h6' color='white'>100% Secured</Typography>
                         <Typography variant='h8' marginTop={1} color='#ffffffb3'>We Take proactive steps make your information and transactions secure </Typography>
                        </Grid>
                        <Grid marginTop={2} style={{textAlign:'start'}}>
                        <Typography marginTop={1} variant='h6' color='white'>Balance Transfer</Typography>
                         <Typography variant='h8' marginTop={1} color='#ffffffb3'>A balance transfer credit card can save you a lot of money in interest charges.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default Money