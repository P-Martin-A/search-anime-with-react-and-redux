import React from 'react'

import Title from '../../components/title'

function Header({ path }) {
  return (
    <header className="container-fluid text-center py-2 border-bottom boder-2">
      <Title
        isHome={ path }
      />
    </header>
  )
}

export default Header
