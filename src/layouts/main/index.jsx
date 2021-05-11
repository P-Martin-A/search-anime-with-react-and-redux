import React from 'react'

import { main } from './styles.module.css'
import { container } from '../../assets/styles/tools/container.module.css'

import Search from '../../components/search'
import AnimeList from '../../components/animeList'

function Main() {
  return (
    <main className={main}>
      <div className={container}>
        <Search />
        <AnimeList />
      </div>
    </main>
  )
}

export default Main
