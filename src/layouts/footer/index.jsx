import React from 'react'

import { footer } from './styles.module.css'
import { container } from '../../assets/styles/tools/container.module.css'

import CopyRight from '../../components/copyRight'

function Footer() {
  return (
    <footer className={footer}>
      <div className={container}>
        <CopyRight />
      </div>
    </footer>
  )
}

export default Footer
