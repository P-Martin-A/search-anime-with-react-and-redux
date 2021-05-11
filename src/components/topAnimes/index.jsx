import React from 'react'

import { list, item, link } from './styles.module.css'

function TopAnimes() {
  return (
    <ul className={list}>
      <li className={item}>
        <a className={link} href="#">Snk</a>
      </li>
      <li className={item}>
        <a className={link} href="#">Ns</a>
      </li>
      <li className={item}>
        <a className={link} href="#">Op</a>
      </li>
    </ul>
  )
}

export default TopAnimes
