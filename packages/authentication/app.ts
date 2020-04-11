/**
 * Module dependencies.
 */

const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
require("dotenv").config();

/**
 * Controllers (route handlers).
 */
const app = express();

const userController = require("./controllers/user");

/**
 * Express configuration.
 */
app.set("host", "0.0.0.0");
app.set("port", process.env.PORT || 3030);
app.set("json spaces", 2); // number of spaces for indentation
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.post("/sign-up", userController.postSignUp);
app.post("/sign-in", userController.postSignIn);
app.post("/admin/sign-up", userController.postAdminSignUp);
app.get("/webhook", userController.getWebhook);
app.get("/jwks", userController.getJwks);
/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(
    "⚡️ Ready on http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

module.exports = app;
