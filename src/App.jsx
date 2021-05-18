import React from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

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
