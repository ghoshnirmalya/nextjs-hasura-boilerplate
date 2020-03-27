import { Component } from 'react'
import { parseCookies } from 'nookies'
import { NextPage } from 'next'
import Router from 'next/router'

// Gets the display name of a JSX component for dev tools
const getComponentDisplayName = (Component: any) => {
  return Component.displayName || Component.name || 'Unknown'
}

export default (ComposedComponent: NextPage) => {
  return class WithAuthentication extends Component {
    static displayName = `WithAuthentication(${getComponentDisplayName(
      ComposedComponent
    )})`

    static async getInitialProps(ctx: any) {
      const isAuthenticated = !!parseCookies(ctx).token

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // When the user is authenticated, don't let the user visit the
      // sign-in and sign-up routes
      if (
        isAuthenticated &&
        ['/sign-up', '/sign-in'].indexOf(ctx.asPath) > -1
      ) {
        if (typeof window !== 'undefined') {
          Router.push('/')
        } else {
          ctx.res.redirect('/')
        }
      }

      return {
        ...composedInitialProps,
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
}
