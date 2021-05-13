import React from 'react'

import { list, item, link } from './styles.module.css'

import { connect } from 'react-redux'

function TopAnimes({ top_animes }) {
  return (
    <ul className={ list }>
      { top_animes.map(({ mal_id, url, title }) => (
        <li
          className={ item }
          key={ mal_id }
        >
          <a className={ link } href={ url } target="_blank" rel="noreferrer">
            <b>{ title }</b>
          </a>
        </li>
      )) }
    </ul>
  )
}

const MAP_STATE_TO_PROPS = ({ top_animes }) => ({
  top_animes
})

export default connect(MAP_STATE_TO_PROPS, null)(TopAnimes)
