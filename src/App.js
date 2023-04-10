import React from 'react'
import Animes from './components/Animes'
import { AnimeDetails } from './components/AnimeDetails'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
    <Route exact path="/" component={Animes} />
    <Route exact path="/animedetails/:id" component={AnimeDetails} />
    </Switch>
  )
}

export default App