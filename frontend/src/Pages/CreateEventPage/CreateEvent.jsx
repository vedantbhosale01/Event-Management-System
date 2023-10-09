import React from 'react';
import ResponsiveDrawer from '../../components/SideBar/SideBar';
import AddEvent from '../../components/AddEvent/AddEvent';
import { Container, Grid } from '@mui/material';

const CreateEvent = () => {
  return (
    <>
    <Grid container className='h-100%'>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>
      <Grid item paddingLeft={{xs:'0px',sm:'240px', md:'240px', lg:'240px'}} lg={12} md={12} sm={12} xs={12}>
        <Container >
        <p className='text-2xl pl-8'>Add Event Information</p>
          <AddEvent></AddEvent>
        </Container>
      </Grid>
    </Grid>
    </>
  )
}

export default CreateEvent