import React from 'react'

import Search from '../../components/search'
import AnimeList from '../../components/animeList'

function Main() {
  return (
    <main className="my-4">
      <div className="container">
        <Search />
        <AnimeList />
      </div>
    </main>
  )
}

export default Main
