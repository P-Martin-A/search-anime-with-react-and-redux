import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import generateStore from './redux/store'
import { Provider } from 'react-redux'

const STORE = generateStore()

ReactDOM.render(
  <StrictMode>
    <Provider store={ STORE }>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
