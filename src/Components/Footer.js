import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {  Typography } from '@mui/material';
import logo from "../images/logo.svg";

function Footer() {
  return (
    <div>
         <Box sx={{flexGrow:1}} className='footer'>
            <br/><br/><br/>
            <Container>
                <Grid paddingLeft={2} container spacing={2} style={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center'}}>
                    <Grid lg={3} marginBottom={2} sx={{display:'block' ,textAlign:'start'}}>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 ,textAlign:"left" }} p={0} m={0}>
            <img src={logo} alt="..." width={128} height={128}></img>
          </Typography>
          <Typography variant='body-2' color='#ffffffb3'>A new way to make the payments easy, reliable and secure.</Typography>
                    </Grid>
                    <Grid lg={2.5} sx={{display:'block' ,textAlign:'start'}}>
                        <Typography variant='h7' marginTop={1} color='#fff'>Useful Links</Typography><br/>
                        <Typography variant='h8' marginTop={2} color='#ffffffb3'>Content</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>How it Works</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>Creative</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>Explore</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>Terms & Service</Typography><br/>


                        </Grid>
                        <Grid lg={2.5} sx={{display:'block' ,textAlign:'start'}}>
                        <Typography variant='h7' marginTop={1} color='#fff'>Community</Typography><br/>
                        <Typography variant='h8' marginTop={2} color='#ffffffb3'>Help Center</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>Partners</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>Suggestions</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>Blog</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>Newsletters</Typography><br/>
                        </Grid>
                        <Grid lg={2.5} sx={{display:'block' ,textAlign:'start'}}>
                        <Typography variant='h7' marginTop={1} color='#fff'>Partner</Typography><br/>
                        <Typography variant='h8' marginTop={2} color='#ffffffb3'>Our partner</Typography><br/>
                        <Typography variant='h8' marginTop={3} color='#ffffffb3'>Become a Partner</Typography><br/>
                        </Grid>
                </Grid>
            </Container>
         </Box>
    </div>
  )
}

export default Footer