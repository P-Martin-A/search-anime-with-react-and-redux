import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer/'
import { getTopAnimes } from './actions'

const INITIAL_STATE = {
  top_animes: [],
  search: '',
  results_animes: [],
  details_anime: {},
  fetching: false,
  error: null
}

// const COMPOSE_ENHANCERS = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function generateStore() {
  const STORE = createStore(
    reducer,
    INITIAL_STATE,
    // Error: Actions must be plain objects. Use custom middleware for async actions.
    // POR ESO AGREGUÉ LA FUNCIÓN "applyMiddleware()"
    // COMPOSE_ENHANCERS(applyMiddleware(thunk))
    compose(applyMiddleware(thunk))
  )

  getTopAnimes()(STORE.dispatch, STORE.getState)

  return STORE
}

export default generateStore
