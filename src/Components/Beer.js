import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(1)
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain'
  },
  cardContent: {
    flexGrow: 1
  }
}))

const Beer = (props) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.imageUrl}
        title='Image title'
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant='h5' component='h2'>
          {props.name}
        </Typography>
        <Typography>
          First brewed: {props.firstBrewed}
        </Typography>
        <Typography>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Beer
