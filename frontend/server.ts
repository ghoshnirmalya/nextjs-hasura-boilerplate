import next from 'next'
import express from 'express'
import { join } from 'path'
import { parse } from 'url'

const Sentry = require('@sentry/node')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    if (process.env.NODE_ENV === 'production') {
      Sentry.init({ dsn: process.env.SENTRY_PUBLIC_DSN })

      server.use(Sentry.Handlers.requestHandler())
    }

    server.get('*', (req: any, res: any) => {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '.next', pathname)
        app.serveStatic(req, res, filePath)
      } else {
        handle(req, res, parsedUrl)
      }
    })

    server.listen(process.env.PORT || 3000, () => {
      console.log('⚡️ Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
