import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const AppHeader = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Github Issues
      </Typography>
    </Toolbar>
  </AppBar>
)

export default AppHeader
