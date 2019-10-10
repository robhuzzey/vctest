import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#DC143C'
  }
}))

const Header = (props) => {
  const classes = useStyles()
  return (
    <>
      <AppBar className={classes.header} position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
