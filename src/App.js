import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Beer from './Components/Beer'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Search from './Components/Search'
import CardGrid from './Components/CardGrid'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: [],
      searchTerm: null,
      fetching: false
    }
  }

  async fetchBeers (searchTerm) {
    this.setState(() => {
      return {
        beers: [],
        fetching: true
      }
    })
    const cleanedSearchTerm = searchTerm.replace(/ /g, '_')
    const beers = await fetch(`https://api.punkapi.com/v2/beers?food=${cleanedSearchTerm}`)
      .then(data => data.json())
      .then(json => {
        return json
      })
    this.setState(() => {
      return {
        beers,
        fetching: false
      }
    })
  }

  render () {
    return (
      <>
        <CssBaseline />
        <Header
          title='IPA Brewdog'
        />
        <main>
          <Search
            placeHolderText='Search for your favourite foods here'
            onSearch={searchTerm => {
              this.fetchBeers(searchTerm)
              this.setState(() => {
                return {
                  searchTerm
                }
              })
            }}
          />

          {this.state.searchTerm && !this.state.fetching && (
            <CardGrid>
              {this.state.beers.length === 0 ? (
                <Typography>{`No results to show for ${this.state.searchTerm}`}</Typography>
              ) : (
                <Typography>{`Beers that pair well with: ${this.state.searchTerm}`}</Typography>
              )}
            </CardGrid>
          )}

          {this.state.beers.length > 0 && (
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
          )}
        </main>
        <Footer>
          Simple app demo for VL
        </Footer>
      </>
    )
  }
}

export default App
