import React from 'react'

import Loader from '../loader'

import { connect } from 'react-redux'

function AnimeDetails({ fetching, details_anime }) {
  if (fetching) return <Loader />

  const { url, image_url, trailer_url, title, title_japanese, aired: { string }, synopsis, genres } = details_anime

  return (
    <div>
      <div className="mb-5 h-75 text-center">
        { trailer_url ? (
          <iframe className="w-100"
            src={ trailer_url }
            title={ title }
            style={ { height: 400 + 'px' } }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <figure className="figure">
            <img className="figure-img img-fluid rounded"
              src={ image_url }
              alt={ title }
            />
            <figcaption className="figure-caption">{ title_japanese }</figcaption>
          </figure>
        ) }
      </div>
      <div className="mb-5">
        <div className="mb-4">
          <h2 className="h1 text-info">
            { title }
            <a className="fs-5 px-2"
              href={ url } target="_blank" rel="noreferrer"
            >More Info</a>
          </h2>
          <time className="fs-6">{ string }</time>
        </div>
        <p className="fs-6 text-break fw-light">{ synopsis }</p>
        <u className="text-decoration-underline">Genres: </u>
        <ul className="list-unstyled d-flex justify-content-center align-items-center flex-wrap">
          { genres.map(({ mal_id, name }, index) => (
            <li className="mx-2 my-4 fst-italic text-muted"
              key={ mal_id }
            >{ index }_ { name }</li>
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
