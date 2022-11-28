import React from 'react'
import { Container, Grid, Paper} from '@mui/material'
import { Link, Route, Routes } from 'react-router-dom'
import { info } from '../assets/info_ramos'
import Mate from './ramos/Mate.js'

export default function Ramos() {

  return (
    <div>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={4} component={Link} to={'mate'} >
            <Paper>Mate</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>Fis</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>Efi</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>Progra</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>Huma</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>Libre</Paper>
          </Grid>
        </Grid>
      </Container>
      <Routes>
        {/* <Route path="mate" element={<Mate/>} /> */}
      </Routes>
    </div>
  )
}
