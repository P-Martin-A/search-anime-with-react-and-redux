import React from 'react'

import { aside } from './styles.module.css'

import TopAnimes from '../../components/topAnimes'

function Aside() {
  return (
    <aside className={ aside }>
      <TopAnimes />
    </aside>
  )
}

export default Aside
