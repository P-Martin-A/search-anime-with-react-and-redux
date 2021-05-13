import React from 'react'

import { animeList, card, figure, image, text } from './styles.module.css'

import Loader from '../loader'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function AnimeList({ fetching, results_animes }) {
  if (fetching) return <Loader />

  return (
    <div className={ animeList }>
      { results_animes.map(({ mal_id, image_url, title })=> (
        <Link
          key={ mal_id }
          to={ `/anime/${mal_id}` }
        >
          <article className={ card }>
            <figure className={ figure }>
              <img className={ image }
                src={ image_url }
                alt={ title }
              />
              <figcaption className={ text }>{ title }</figcaption>
            </figure>
          </article>
        </Link>
      )) }
    </div>
  )
}

const MAP_STATE_TO_PROPS = ({ fetching, results_animes }) => ({
  fetching,
  results_animes
})

export default connect(MAP_STATE_TO_PROPS, null)(AnimeList)
