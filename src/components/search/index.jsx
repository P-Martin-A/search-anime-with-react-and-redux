import React from 'react'

import { searchContainer, search } from './styles.module.css'

function Search() {
  return (
    <form className={searchContainer}>
      <input className={search}
        type="search"
        placeholder="Search a Anime"
        required
      />
    </form>
  )
}

export default Search
