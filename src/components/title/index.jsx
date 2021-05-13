import React from 'react'

import { title, italic } from './styles.module.css'

import { Link } from 'react-router-dom'

function Title() {
  return (
    <Link to="/">
      <h1 className={ title }>
        The <i className={ italic }>Anime</i> List
      </h1>
    </Link>
  )
}

export default Title
