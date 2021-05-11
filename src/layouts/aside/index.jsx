import React from 'react'

import { aside } from './styles.module.css'
import { container } from '../../assets/styles/tools/container.module.css'

import TopAnimes from '../../components/topAnimes'

function Aside() {
  return (
    <aside className={aside}>
      <div className={container}>
        <TopAnimes />
      </div>
    </aside>
  )
}

export default Aside
