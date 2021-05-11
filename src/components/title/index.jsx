import React from 'react'

import { title, italic } from './styles.module.css'

function Title() {
  return (
    <h1 className={title}>
      The <i className={italic}>Anime</i> List
    </h1>
  )
}

export default Title
