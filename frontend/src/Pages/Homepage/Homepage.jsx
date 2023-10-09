import { Grid } from '@mui/material'
import React from 'react'
import Feed from '../../components/feed/Feed'
import ResponsiveDrawer from '../../components/SideBar/SideBar'
import Rightbar from '../../components/rightbar/Rightbar'

const Homepage = () => {
  return (
    <>
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer />
        
      </Grid>

      <Grid  paddingLeft={{xs:'0px',sm:'240px', md:'240px', lg:'240px'}} item lg={10}>
        <Feed />       
      </Grid>
      
      <Grid item lg={2}>
        <Rightbar />
        
      </Grid>
    </Grid>
    </>
  )
}

export default Homepage