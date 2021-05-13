import React from 'react'

import './assets/styles/app.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Anime from './pages/Anime'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/anime/:id" component={ Anime } />
      </Switch>
    </BrowserRouter>
  )
}

export default App
