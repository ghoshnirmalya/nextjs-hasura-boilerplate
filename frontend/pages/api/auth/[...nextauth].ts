import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

interface iToken {
  id: string;
  email: string;
  name?: string;
  picture?: string;
}

const options = {
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
  },
  jwt: {
    encode: async ({ token, secret }: { token: iToken; secret: string }) => {
      const tokenContents = {
        id: token.id,
        name: token.name,
        email: token.email,
        picture: token.picture,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["admin", "user"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": token.id,
        },
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        sub: token.id,
      };

      const signOptions = {
        algorithm: "RS256",
      };

      const encodedToken = jwt.sign(
        tokenContents,
        process.env.AUTH_PRIVATE_KEY || secret,
        // @ts-ignore
        signOptions
      );

      return encodedToken;
    },
    decode: async ({ token, secret }: { token: string; secret: string }) => {
      const signOptions = {
        algorithms: ["RS256"],
      };

      const decodedToken = jwt.verify(
        token,
        process.env.AUTH_PRIVATE_KEY || secret,
        // @ts-ignore
        signOptions
      );

      return decodedToken;
    },
  },
  debug: true,
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token, user) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.id = user.id;
      }

      return Promise.resolve(token);
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
