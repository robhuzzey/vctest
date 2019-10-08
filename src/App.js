import React from 'react'
import './App.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Beer from './Components/Beer'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Search from './Components/Search'
import CardGrid from './Components/CardGrid'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: [1, 2, 3, 4, 5, 6]
    }
  }

  fetchBeers () {}

  render () {
    return (
      <>
        <CssBaseline />
        <Header />
        <main>
          <Search
            onSearch={searchTerm => {
              console.log('SEARCH', searchTerm)
            }}
          />
          <CardGrid>
            <Grid container spacing={4}>
              {this.state.beers.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Beer />
                </Grid>
              ))}
            </Grid>
          </CardGrid>
        </main>
        <Footer />
      </>
    )
  }
}

export default App
