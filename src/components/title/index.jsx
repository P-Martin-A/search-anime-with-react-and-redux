import React from 'react'

import { Link } from 'react-router-dom'

function Title({ isHome }) {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <h1 className="text-info">
      The <i className="text-secondary">Anime</i> List
      </h1>
      { isHome !== '/' && (
        <Link className="text-decoration-none text-info h1"
          to="/"
        >
          <i className="bi bi-house-door-fill" />
        </Link>
      ) }
    </div>
  )
}

export default Title
