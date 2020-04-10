import { Component } from "react";
import { NextPage, NextPageContext, NextComponentType } from "next";
import Router from "next/router";
import { cookieParser } from "lib/cookie";

interface Context extends NextPageContext {
  // any modifications to the default context, e.g. query types
  asPath: string;
}

// Gets the display name of a JSX component for dev tools
const getComponentDisplayName = (Component: NextComponentType) => {
  return Component.displayName || Component.name || "Unknown";
};

export default (ComposedComponent: NextPage) => {
  return class WithAuthentication extends Component {
    static displayName = `WithAuthentication(${getComponentDisplayName(
      ComposedComponent
    )})`;

    static async getInitialProps(ctx: Context) {
      const isAuthenticated = !!cookieParser("token", ctx);

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      // When the user is authenticated, don't let the user visit the
      // sign-in and sign-up routes
      if (
        isAuthenticated &&
        ["/sign-up", "/sign-in", "/admin/sign-up"].indexOf(ctx.asPath) > -1
      ) {
        if (typeof window !== "undefined") {
          Router.push("/");
        } else {
          if (ctx.res) {
            ctx.res.writeHead(301, {
              Location: "/",
            });
            ctx.res.end();
          }
        }
      } else if (
        !isAuthenticated &&
        ["/sign-up", "/sign-in", "/admin/sign-up"].indexOf(ctx.asPath) === -1
      ) {
        if (typeof window !== "undefined") {
          Router.push("/sign-up");
        } else {
          if (ctx.res) {
            ctx.res.writeHead(301, {
              Location: "/sign-up",
            });
            ctx.res.end();
          }
        }
      }

      return {
        ...composedInitialProps,
        isAuthenticated,
      };
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
};
