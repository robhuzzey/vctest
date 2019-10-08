import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#dc143c'
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar className={classes.header} position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            IPA Brewdog
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
