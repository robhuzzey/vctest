import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  searchBar: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1)
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  }
}))

const Search = (props = {
  onSearch: () => {},
  placeHolderText: 'Search'
}) => {
  const classes = useStyles()
  const [searchTerm, setState] = useState('')
  const searchCallback = () => {
    props.onSearch(searchTerm)
    setState('')
  }
  return (
    <Container className={classes.searchBar} maxWidth='md'>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder={props.placeHolderText}
          inputProps={{ 'aria-label': props.placeHolderText }}
          onChange={event => {
            setState(event.target.value)
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchCallback()
            }
          }}
          value={searchTerm}
        />
        <IconButton
          className={classes.iconButton}
          aria-label='search'
          onClick={searchCallback}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  )
}

export default Search
