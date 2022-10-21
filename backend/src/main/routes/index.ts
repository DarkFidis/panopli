import * as express from 'express'

import { getNearbyPlacesMw } from '../middlewares/places'
import { toExpressMw } from '../utils/helper'

const router = express.Router()

router.post('/places', toExpressMw(getNearbyPlacesMw))

export = router
