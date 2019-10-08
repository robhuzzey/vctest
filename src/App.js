import React from 'react'
import './App.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Beer from './Components/Beer'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Search from './Components/Search'
import CardGrid from './Components/CardGrid'

const fetchBeers = async (searchTerm) => {
  const cleanedSearchTerm = searchTerm.replace(' ', '_')
  const result = await fetch(`https://api.punkapi.com/v2/beers?food=${cleanedSearchTerm}`)
    .then(data => data.json())
    .then(json => {
      return json
    })
  return result
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: []
    }
  }

  async fetchBeers (searchTerm) {
    const beers = await fetchBeers(searchTerm)
    this.setState(() => {
      return {
        beers
      }
    })
  }

  render () {
    return (
      <>
        <CssBaseline />
        <Header />
        <main>
          <Search
            onSearch={searchTerm => {
              this.fetchBeers(searchTerm)
            }}
          />
          <CardGrid>
            <Grid container spacing={4}>
              {this.state.beers.map(beer => (
                <Grid item key={beer.id} xs={12} sm={6} md={4}>
                  <Beer
                    name={beer.name}
                    imageUrl={beer.image_url}
                    description={beer.description}
                    firstBrewed={beer.first_brewed}
                  />
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
