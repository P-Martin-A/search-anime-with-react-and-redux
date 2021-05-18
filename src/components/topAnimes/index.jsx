import React from 'react'

import { connect } from 'react-redux'

import { getAnimeSearch } from '../../redux/actions'

function TopAnimes({ getAnimeSearch, top_animes }) {
  return (
    <div className="container-fluid py-2">
      <button className="navbar-toggler fs-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list" />
      </button>
      <div className="collapse navbar-collapse justify-content-center my-2" id="navbarNav">
        <ul className="list-unstyled navbar-nav">
          { top_animes.map(({ mal_id, title }) => (
            <li className="nav-item text-nowrap m-2"
              key={ mal_id }
            >
              <button className="btn btn-outline-secondary" onClick={ () => getAnimeSearch(title) } >{ title }</button>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

const MAP_STATE_TO_PROPS = ({ top_animes }) => ({
  top_animes
})

const MAP_DISPATCH_TO_PROPS = {
  getAnimeSearch
}

export default connect(MAP_STATE_TO_PROPS, MAP_DISPATCH_TO_PROPS)(TopAnimes)
