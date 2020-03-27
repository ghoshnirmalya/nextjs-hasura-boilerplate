import next from 'next'
import express from 'express'
import { parse } from 'url'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.get('*', (req: any, res: any) => {
      const parsedUrl = parse(req.url, true)

      handle(req, res, parsedUrl)
    })

    server.listen(process.env.PORT || 3000, () => {
      console.log('⚡️ Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
