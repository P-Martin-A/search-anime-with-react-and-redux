import React, { useState } from 'react'

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
    <form className="form-floating mb-5"
      onSubmit={ HANDLE_FORM }
    >
      <input className="form-control"
        onChange={ ({ target: { value } }) => setQuery(value) }
        value={ query }
        id="searchAnime"
        type="search"
        placeholder="Search a Anime"
        minLength="3"
        required
      />
      <label htmlFor="searchAnime">Search a Anime</label>
    </form>
  )
}

const MAP_TO_DISPATCH_PROPS = {
  getAnimeSearch
}

export default connect(null, MAP_TO_DISPATCH_PROPS)(Search)
