import { NextFunction, Request, Response } from 'express'
import { create, defaults, router } from 'json-server'
import path from 'path'

const cors = require('cors')
const app = create()
const routes = router(path.join(__dirname, 'db', 'root.json'))
const middlewares = defaults()
const PORT = 9000

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  // return next() to continue to routes
  // learn more about middleware https://expressjs.com/en/guide/using-middleware.html
  return token ? next() : res.status(401).json({
    "message": "UNAUTHORIZED. you need authorization header, you can add it with postman (https://www.postman.com/downloads/)"
  })
}

app.use(cors())
app.options('*', cors())

app.get('/', (req, res, next) => {
  res.json('server was running')
})

app.use(middlewares)
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`server was running on http://localhost:${PORT}`)
})