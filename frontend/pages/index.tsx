import React, { Fragment } from 'react'
import Head from 'next/head'

import Page from '../components/index'

const IndexPage = () => {
  return (
    <Fragment>
      <Head>
        <title>GitFlash</title>
      </Head>
      <Page />
    </Fragment>
  )
}

export default IndexPage
