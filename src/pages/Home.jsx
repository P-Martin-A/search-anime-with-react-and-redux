import React, { Fragment } from 'react'

import Header from '../layouts/header'
import Aside from '../layouts/aside'
import Main from '../layouts/main'
import Footer from '../layouts/footer'

function Home() {
  return (
    <Fragment>
      <Header />
      <Aside />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default Home
