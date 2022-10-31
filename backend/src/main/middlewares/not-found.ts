import { Request, RequestHandler, Response } from 'express'

import { NotFoundError } from '../errors/not-found-error'
import { log } from '../log'

const notFound: RequestHandler = (req: Request, res: Response) => {
  if (res.headersSent) {
    return
  }
  log.error(`Route ${req.url} does not exists`)
  throw new NotFoundError()
}

export { notFound }
