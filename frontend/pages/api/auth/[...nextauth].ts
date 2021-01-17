import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import ISession from "types/session";
import IUser from "types/user";
import iToken from "types/token";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
  ssl: process.env.NODE_ENV === "production" && {
    rejectUnauthorized: false,
  },
});
const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_KEY);

const defaultUserRole = "verified";

const fetchAllRoles = async () => {
  await pool.connect();

  let allRoles = ["verified"];

  try {
    const response = await pool.query("SELECT * FROM roles");

    allRoles = response.rows.map((row) => row.name);

    return allRoles;
  } catch (err) {
    console.log(err);
  }

  return allRoles;
};

const fetchCurrentUserRole = async (userId: number) => {
  await pool.connect();

  try {
    const usersResponse = await pool.query(
      "SELECT role_id FROM users WHERE id = $1",
      [userId]
    );
    const roleId = usersResponse.rows[0].role_id;

    const rolesResponse = await pool.query(
      "SELECT name FROM roles WHERE id = $1",
      [roleId]
    );
    const roleType = rolesResponse.rows[0].name;

    return roleType;
  } catch (err) {
    console.log(err);
  }
};

const fetchDefaultRole = async () => {
  await pool.connect();

  try {
    const response = await pool.query(
      "SELECT * FROM roles WHERE name LIKE $1",
      [defaultUserRole]
    );

    const roleId = response.rows[0].id;

    return roleId;
  } catch (err) {
    console.log(err);
  }
};

const insertRoleForNewUser = async (userId: number) => {
  await pool.connect();

  const defaultRoleId = await fetchDefaultRole();

  try {
    await pool.query("UPDATE users SET role_id = $1 where id = $2;", [
      defaultRoleId,
      userId,
    ]);
  } catch (err) {
    console.log(err);
  }
};

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: process.env.NODE_ENV === "production",
    extra: process.env.NODE_ENV === "production" && {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  session: {
    jwt: true,
  },
  jwt: {
    encode: async ({ token }: { token: iToken }) => {
      const tokenContents = {
        id: token.id,
        name: token.name,
        email: token.email,
        picture: token.picture,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": await fetchAllRoles(),
          "x-hasura-default-role": defaultUserRole,
          "x-hasura-role": await fetchCurrentUserRole(token.id),
          "x-hasura-user-id": token.id,
        },
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        sub: token.id,
      };

      const encodedToken = jwt.sign(tokenContents, jwtSecret.key, {
        algorithm: jwtSecret.type,
      });

      return encodedToken;
    },
    decode: async ({ token }: { token: string }) => {
      const decodedToken = jwt.verify(token, jwtSecret.key, {
        algorithms: jwtSecret.type,
      });

      return decodedToken;
    },
  },
  debug: true,
  callbacks: {
    session: async (session: ISession, user: IUser) => {
      const encodedToken = jwt.sign(user, jwtSecret.key, {
        algorithm: jwtSecret.type,
      });

      session.id = user.id;
      session.token = encodedToken;

      return Promise.resolve(session);
    },
    jwt: async (token: iToken, user: IUser) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.id = user.id;

        await insertRoleForNewUser(user.id);
      }

      return Promise.resolve(token);
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
