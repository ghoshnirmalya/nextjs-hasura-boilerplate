const rasha = require('rasha')
const sgMail = require('@sendgrid/mail')

const passport = require('../config/passport')
const { User } = require('../db/schema')
const { errorHandler } = require('../db/errors')
const jwtConfig = require('../config/jwt')

/**
 * Sends the JWT key set
 */
exports.getJwks = async (req, res, next) => {
  const jwk = {
    ...rasha.importSync({ pem: jwtConfig.publicKey }),
    alg: 'RS256',
    use: 'sig',
    kid: jwtConfig.publicKey,
  }
  const jwks = {
    keys: [jwk],
  }
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(jwks, null, 2) + '\n')
  handleResponse(res, 200, jwks)
}

/**
 * Sign in using email and password and returns JWT
 */
exports.postLogin = async (req, res, next) => {
  req.assert('email', 'email is not valid').notEmpty()
  req.assert('password', 'Password cannot be blank').notEmpty()

  const errors = req.validationErrors()

  if (errors) {
    return res.status(400).json({ errors: errors })
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return handleResponse(res, 400, { error: err })
    }
    if (user) {
      handleResponse(res, 200, user.getUser())
    }
  })(req, res, next)
}

/**
 * POST /signup
 * Create a new local account
 */
exports.postSignup = async (req, res, next) => {
  req.assert('email', 'email is not valid').notEmpty()
  req.assert('password', 'Password must be at least 4 characters long').len(4)

  const errors = req.validationErrors()

  if (errors) {
    return res.status(400).json({ errors: errors })
  }

  try {
    const user = await User.query()
      .allowInsert('[email, password]')
      .insert({
        email: req.body.email,
        password: req.body.password,
      })
  } catch (err) {
    errorHandler(err, res)
    return
  }
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return handleResponse(res, 400, { error: err })
    }
    if (user) {
      if (process.env.NODE_ENV !== 'development') {
        /**
         * Don't send emails for development environment
         */
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        const msg = {
          to: req.body.email,
          from: 'welcome@perfy.io',
          subject: 'Welcome to Perfy!',
          text: 'Welcome to Perfy! Let us help you make your website faster.',
          html:
            '<strong>Welcome to Perfy! Let us help you make your website faster.</strong>',
        }

        sgMail.send(msg)
      }

      handleResponse(res, 200, user.getUser())
    }
  })(req, res, next)
}

exports.getWebhook = async (req, res, next) => {
  passport.authenticate('bearer', (err, user, info) => {
    if (err) {
      return handleResponse(res, 401, { error: err })
    }
    if (user) {
      handleResponse(res, 200, user.getHasuraClaims())
    } else {
      handleResponse(res, 200, { 'X-Hasura-Role': 'anonymous' })
    }
  })(req, res, next)
}

function handleResponse(res, code, statusMsg) {
  console.log(res, code, statusMsg)

  res.status(code).json(statusMsg)
}
