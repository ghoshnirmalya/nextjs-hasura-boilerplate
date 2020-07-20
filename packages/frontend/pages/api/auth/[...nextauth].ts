import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";
import { Client } from "pg";
import { NextApiRequest, NextApiResponse } from "next";

interface iToken {
  email: string;
  name: string;
  picture: string;
}

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const options = {
  site: process.env.VERCEL_URL,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: false,
  },
  jwt: {
    encode: async ({ token, secret }: { token: iToken; secret: string }) => {
      // @ts-ignore
      if (!client._connected) {
        client.connect();
      }

      const result = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [token.email]
      );

      const user = result.rows[0];

      const tokenContents = {
        name: token.name,
        email: token.email,
        picture: token.picture,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["admin", "user"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": user.id.toString(),
        },
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        sub: user.id.toString(),
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
  allowSignin: () => true,
  debug: true,
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
