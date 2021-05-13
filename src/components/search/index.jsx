import React, { useState } from 'react'

import { searchContainer, search } from './styles.module.css'

import { connect } from 'react-redux'
import { getAnimeSearch } from '../../redux/actions'

function Search({ getAnimeSearch }) {
  const [
    query,
    setQuery
  ] = useState('')

  const HANDLE_FORM = e => {
    e.preventDefault()

    getAnimeSearch(query)
  }

  return (
    <form className={ searchContainer }
      onSubmit={ HANDLE_FORM }
    >
      <input className={ search }
        onChange={ ({ target: { value } }) => setQuery(value) }
        value={ query }
        type="search"
        placeholder="Search a Anime"
        required
      />
    </form>
  )
}

const MAP_TO_DISPATCH_PROPS = {
  getAnimeSearch
}

export default connect(null, MAP_TO_DISPATCH_PROPS)(Search)
