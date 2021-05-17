import React from 'react'

import { list, item, button } from './styles.module.css'

import { connect } from 'react-redux'

import { getAnimeSearch } from '../../redux/actions'

function TopAnimes({ getAnimeSearch, top_animes }) {
  return (
    <ul className={ list }>
      { top_animes.map(({ mal_id, title }) => (
        <li
          className={ item }
          key={ mal_id }
        >
          <button className={ button } onClick={ () => getAnimeSearch(title) } >{ title }</button>
        </li>
      )) }
    </ul>
  )
}

const MAP_STATE_TO_PROPS = ({ top_animes }) => ({
  top_animes
})

const MAP_DISPATCH_TO_PROPS = {
  getAnimeSearch
}

export default connect(MAP_STATE_TO_PROPS, MAP_DISPATCH_TO_PROPS)(TopAnimes)
