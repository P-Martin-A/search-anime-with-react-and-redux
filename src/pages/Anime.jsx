import React, { Fragment } from 'react'

import Header from '../layouts/header'
import Footer from '../layouts/footer'
import Section from '../layouts/section'

import { connect } from 'react-redux'
import { resetStore, getDetailsAnime } from '../redux/actions'

function Anime({ location: { pathname }, match: { params: { id } }, resetStore, getDetailsAnime }) {
  if (pathname !== '/') {
    resetStore()
  }

  getDetailsAnime(id)
  return (
    <Fragment>
      <Header />
      <Section />
      <Footer />
    </Fragment>
  )
}

const MAP_DISPATCH_TO_PROPS = {
  resetStore,
  getDetailsAnime
}

export default connect(null, MAP_DISPATCH_TO_PROPS)(Anime)
