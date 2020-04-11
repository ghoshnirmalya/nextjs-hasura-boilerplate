import { Request, Response, NextFunction } from "express";
const rasha = require("rasha");
const { check, validationResult } = require("express-validator");

const { User, Role, UserRole } = require("../db/schema");
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
    kid: jwtConfig.publicKey,
  };
  const jwks = {
    keys: [jwk],
  };

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(jwks, null, 2) + "\n");
  handleResponse(res, 200, jwks);
};

exports.getWebhook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("bearer", (err: Error, user: any) => {
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

const handleResponse = (res: Response, code: number, statusMsg: any) => {
  res.status(code).json(statusMsg);
};

const signUpUser = async (
  req: Request,
  res: any,
  next: NextFunction,
  userType: string
) => {
  check("email").isEmail();
  check("password").not().isEmpty();

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await User.query().allowInsert("[email, password]").insert({
      email: req.body.email,
      password: req.body.password,
    });
  } catch (err) {
    errorHandler(err, res);

    return;
  }

  passport.authenticate("local", async (err: Error, user: any) => {
    if (err) {
      return handleResponse(res, 400, { error: err });
    }
    if (user) {
      const { id: userId } = await user.getUser();

      const { id: roleId } = await Role.query().findOne({
        name: userType,
      });

      await UserRole.query().insert({
        role_id: roleId,
        user_id: userId,
      });

      handleResponse(res, 200, user.getUser(userType));
    }
  })(req, res, next);
};

const signInUser = async (req: Request, res: any, next: NextFunction) => {
  check("email").isEmail();
  check("password").not().isEmpty();

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  passport.authenticate("local", async (err: Error, user: any) => {
    if (err) {
      return handleResponse(res, 400, { error: err });
    }
    if (user) {
      const { id: userId } = await user.getUser();

      const { role_id: userRoleId } = await UserRole.query().findOne({
        user_id: userId,
      });

      const userRole = await Role.query().findOne({
        id: userRoleId,
      });

      handleResponse(res, 200, user.getUser(userRole.name));
    }
  })(req, res, next);
};

/**
 * POST /signup
 * Create a new local account
 */
exports.postSignUp = async (req: Request, res: any, next: NextFunction) => {
  signUpUser(req, res, next, "user");
};

/**
 * POST /admin/signup
 * Create a new local admin account
 */
exports.postAdminSignUp = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  signUpUser(req, res, next, "admin");
};

/**
 * Sign in using email and password and returns JWT
 */
exports.postSignIn = async (req: Request, res: any, next: NextFunction) => {
  signInUser(req, res, next);
};
