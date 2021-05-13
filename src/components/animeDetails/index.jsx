import React from 'react'

import { details, sources, trailer_video, figure, image, info, anime_title, description, list, item } from './styles.module.css'

import Loader from '../loader'

import { connect } from 'react-redux'

function AnimeDetails({ fetching, details_anime }) {
  if (fetching) return <Loader />

  const { url, image_url, trailer_url, title, aired: { string }, synopsis, genres } = details_anime

  return (
    <div className={ details }>
      <div className={ sources }>
        { trailer_url ? (
          <iframe className={ trailer_video }
            src={ trailer_url }
            title={ title }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <figure className={ figure }>
            <img className={ image }
              src={ image_url }
              alt={ title }
            />
          </figure>
        ) }
      </div>
      <div className={ info }>
        <div>
          <h2 className={ anime_title }>
            { title }
            <a href={ url } target="_blank" rel="noreferrer">More Info</a>
          </h2>
          <time>{ string }</time>
        </div>
        <p className={ description }>{ synopsis }</p>
        <u>Genres: </u>
        <ul className={ list }>
          { genres.map(({ mal_id, name }) => (
            <li className={ item }
              key={ mal_id }
            >{ name }</li>
          )) }
        </ul>
      </div>
    </div>
  )
}

const MAP_STATE_TO_PROPS = ({ fetching, details_anime }) => ({
  fetching,
  details_anime
})

export default connect(MAP_STATE_TO_PROPS, null)(AnimeDetails)
