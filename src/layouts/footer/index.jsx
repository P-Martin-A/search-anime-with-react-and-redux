import React from 'react'

import { footer } from './styles.module.css'

import CopyRight from '../../components/copyRight'

function Footer() {
  return (
    <footer className={ footer }>
      <CopyRight />
    </footer>
  )
}

export default Footer
