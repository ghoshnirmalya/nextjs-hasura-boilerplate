// @ts-nocheck

import React from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import Head from "next/head";
import { NextPage, NextPageContext, NextComponentType } from "next";
import initApollo from "lib/init-apollo";

const getComponentDisplayName = (Component: NextComponentType) => {
  return Component.displayName || Component.name || "Unknown";
};

export default (ComposedComponent: NextPage) => {
  return class WithApollo extends React.Component {
    static displayName = `WithApollo(${getComponentDisplayName(
      ComposedComponent
    )})`;

    static async getInitialProps(ctx: NextPageContext) {
      let serverState = {
        apollo: {
          data: {},
        },
      };

      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      if (!process.browser) {
        const apollo = initApollo();

        try {
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent
                serverState={serverState}
                {...composedInitialProps}
              />
            </ApolloProvider>,
            {
              router: {
                asPath: ctx.asPath,
                pathname: ctx.pathname,
                query: ctx.query,
              },
            }
          );
        } catch (error) {}

        Head.rewind();

        serverState = {
          apollo: {
            data: apollo.cache.extract(),
          },
        };
      }

      return {
        serverState,
        ...composedInitialProps,
      };
    }

    constructor(props) {
      super(props);

      this.apollo = initApollo({
        ...this.props.pageProps.serverState.apollo.data,
      });
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };
};
