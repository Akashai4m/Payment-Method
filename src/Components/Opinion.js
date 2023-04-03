import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import airbnb from "../images/airbnb.png";
import binance from "../images/binance.png";
import coinbase from "../images/coinbase.png";
import dropbox from "../images/dropbox.png";
import quotes from "../images/quotes.svg";



function Opinion() {
  return (
    <div>
           <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}}>
            <br/><br/>
            <Container>
                <Grid container spacing={2} style={{display:'flex' ,alignItems:"center"}}>
                    <Grid lg={5}>
                      <Typography marginTop={2} variant='h3' color='white'>What people are saying about us</Typography>
                    </Grid>
                    <Grid lg={5}>
                        <Typography marginTop={2} variant='h8' color='#ffffffb3'>Everything you need to accept card payments and grow your business anywhere on the planet.</Typography>
                        </Grid>
                </Grid>
            </Container>
           </Box>
           
           <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}}  >
           <br/> <br/><br/> <br/>
            <Container>
                <Grid container spacing={2} style={{display:'flex' ,justifyContent:"space-between" ,alignItems:"center"}}>
                    <Grid paddingLeft={2} marginTop={2} lg={3.5}>
                    <Card sx={{ minWidth: 275  }} className='footer'>
      <CardContent style={{textAlign:'start'}} className='service'>
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
         <img src={quotes} alt='..'></img>
        </Typography>
        <Typography variant="body2" color='white'>
        Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex"}} className='service'>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Grid>
        <Typography variant='h6' color='white'>Herman Jensen</Typography>
        <Typography variant='h7' color='#ffffffb3'>Founder & Leader</Typography>
      </Grid>
      </CardActions>
    </Card>
                    </Grid>
                    <Grid paddingLeft={2} marginTop={2} lg={3.5}>
                    <Card sx={{ minWidth: 275 ,backgroundColor:"#000" }}>
      <CardContent style={{textAlign:'start'}}>
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
        <img src={quotes} alt='..'></img>
        </Typography>
       
        <Typography variant="body2" color="white">
        Money makes your life easier. If you're lucky to have it, you're lucky.
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex"}}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Grid>
        <Typography variant='h6' color='white'>Steve Mark</Typography>
        <Typography variant='h7' color='#ffffffb3'>Founder & Leader</Typography>
      </Grid>
      </CardActions>
    </Card>
                        </Grid>
                         <Grid paddingLeft={2} marginTop={2} lg={3.5}>
                         <Card sx={{ minWidth: 275 ,backgroundColor:"#000" }}>
      <CardContent style={{textAlign:'start'}}>
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
        <img src={quotes} alt='..'></img>
        </Typography>
       
        <Typography variant="body2" color="white">
        It is usually people in  money business, finance, and international trade that are really rich.
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex"}}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Grid>
        <Typography variant='h6' color='white'>Kenn Gallagher</Typography>
        <Typography variant='h7' color='#ffffffb3'>Founder & Leader</Typography>
      </Grid>
      </CardActions>
    </Card>
                        </Grid>
                </Grid>
            </Container>
           </Box>
           <Box sx={{flexGrow:1}} style={{backgroundColor:"#000"}}>
            <br/><br/><br/>
            <Container>
              <Grid container spacing={2} style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                <Grid xs={6} lg={2.5} marginBottom={2}>
                 <img src={airbnb} width='60%' height='60%' alt='..'></img>
                </Grid>
                <Grid xs={6} lg={2.5} marginBottom={2}>
                <img src={binance} width='60%' height='60%' alt='..'></img>
                </Grid>
                <Grid xs={6} lg={2.5} marginBottom={2}>
                <img src={coinbase} width='60%' height='60%' alt='..'></img>
                </Grid>
                <Grid xs={6} lg={2.5} marginBottom={2}>
                <img src={dropbox} width='60%' height='60%' alt='..'></img>
                </Grid>
              </Grid>
            </Container>
           </Box>

    </div>
  )
}

export default Opinion