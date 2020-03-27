import React from 'react'
import NextApp from 'next/app'
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  theme,
} from '@chakra-ui/core'

import withApollo from '../lib/with-apollo'
import Navbar from '../components/navbar'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Navbar isAuthenticated={pageProps.isAuthenticated} />
          <Component {...this.props} />
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
}

export default withApollo(App)
