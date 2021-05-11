import React from 'react'

import { header } from './styles.module.css'
import { container } from '../../assets/styles/tools/container.module.css'

import Title from '../../components/title'

function Header() {
  return (
    <header className={header}>
      <div className={container}>
        <Title />
      </div>
    </header>
  )
}

export default Header
