import React from 'react'

import Loader from '../loader'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function AnimeList({ fetching, results_animes }) {
  if (fetching) return <Loader />

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      { results_animes.map(({ mal_id, image_url, title }) => (
        <div className="col"
          key={ mal_id }
        >
          <article className="card"
            style={ { maxWidth: 540 + 'px' } }
          >
            <div className="row g-0">
              <div className="col-md-6">
                <img className="card-img h-100"
                  src={ image_url }
                  alt={ title }
                />
              </div>
              <div className="col-md-6 align-self-center">
                <div className="card-body">
                  <h5 className="card-title fs-6">{ title }</h5>
                  <Link className="btn btn-info text-white"
                    to={ `/anime/${mal_id}` }
                  >More info</Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      )) }
    </div>
  )
}

const MAP_STATE_TO_PROPS = ({ fetching, results_animes }) => ({
  fetching,
  results_animes
})

export default connect(MAP_STATE_TO_PROPS, null)(AnimeList)
