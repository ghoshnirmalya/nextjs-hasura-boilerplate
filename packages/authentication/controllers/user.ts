import { Request, Response, NextFunction } from "express";
const rasha = require("rasha");
const { check, validationResult } = require("express-validator");

const { User } = require("../db/schema");
const { errorHandler } = require("../db/errors");
const jwtConfig = require("../config/jwt");
const passport = require("../config/passport");
/**
 * Sends the JWT key set
 */
exports.getJwks = async (req: Request, res: Response) => {
  const jwk = {
    ...rasha.importSync({ pem: jwtConfig.publicKey }),
    alg: "RS256",
    use: "sig",
    kid: jwtConfig.publicKey
  };
  const jwks = {
    keys: [jwk]
  };

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(jwks, null, 2) + "\n");
  handleResponse(res, 200, jwks);
};

/**
 * Sign in using email and password and returns JWT
 */
exports.postLogin = async (req: Request, res: any, next: NextFunction) => {
  check("email").isEmail();
  check("password").not().isEmpty();

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  passport.authenticate("local", (err, user) => {
    if (err) {
      return handleResponse(res, 400, { error: err });
    }
    if (user) {
      handleResponse(res, 200, user.getUser());
    }
  })(req, res, next);
};

/**
 * POST /signup
 * Create a new local account
 */
exports.postSignup = async (req: Request, res: any, next: NextFunction) => {
  check("email").isEmail();
  check("password").not().isEmpty();

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await User.query().allowInsert("[email, password]").insert({
      email: req.body.email,
      password: req.body.password
    });
  } catch (err) {
    errorHandler(err, res);

    return;
  }

  passport.authenticate("local", (err, user) => {
    if (err) {
      return handleResponse(res, 400, { error: err });
    }
    if (user) {
      handleResponse(res, 200, user.getUser());
    }
  })(req, res, next);
};

exports.getWebhook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("bearer", (err, user, info) => {
    if (err) {
      return handleResponse(res, 401, { error: err });
    }
    if (user) {
      handleResponse(res, 200, user.getHasuraClaims());
    } else {
      handleResponse(res, 200, { "X-Hasura-Role": "anonymous" });
    }
  })(req, res, next);
};

function handleResponse(res: Response, code: number, statusMsg: any) {
  console.log(res, code, statusMsg);

  res.status(code).json(statusMsg);
}
