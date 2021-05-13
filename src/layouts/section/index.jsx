import React from 'react'

import { section } from './styles.module.css'
import { container } from '../../assets/styles/tools/container.module.css'

import AnimeDetails from '../../components/animeDetails'

function Section() {
  return (
    <section className={ section }>
      <div className={ container }>
        <AnimeDetails />
      </div>
    </section>
  )
}

export default Section
