import React, { Fragment } from 'react'
import Head from 'next/head'

import withApollo from '../lib/with-apollo'
import Page from '../components/index'

const IndexPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Index</title>
      </Head>
      <Page />
    </Fragment>
  )
}

export default withApollo(IndexPage)
