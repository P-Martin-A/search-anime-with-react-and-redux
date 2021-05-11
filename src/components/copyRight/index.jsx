import React from 'react'

import { list, item, text } from './styles.module.css'

function CopyRight() {
  return (
    <ul className={list}>
      <li className={item}>
        <span className={text}>All Rights Reserved</span>
      </li>
      <li className={item}>
        <span className={text}>© 2021</span>
      </li>
      <li className={item}>
        <span className={text}>Created using React and Redux, stylized with css</span>
      </li>
    </ul>
  )
}

export default CopyRight
