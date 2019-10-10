import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(8)
  }
}))

const CardGrid = (props) => {
  const classes = useStyles()
  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      {props.children}
    </Container>
  )
}

export default CardGrid
