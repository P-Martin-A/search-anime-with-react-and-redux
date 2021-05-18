import React, { Fragment } from 'react'

import Header from '../layouts/header'
import Nav from '../layouts/nav'
import Main from '../layouts/main'
import Footer from '../layouts/footer'

function Home({ location: { pathname } }) {
  return (
    <Fragment>
      <Header
        path={ pathname }
      />
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default Home
