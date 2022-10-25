import { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import { Request } from 'jest-express/lib/request'
import { Response } from 'jest-express/lib/response'
import { when } from 'jest-when'

import { InternalError } from '../../../main/errors/internal-error'
import { RequestAsyncHandler } from '../../../main/types/middlewares'
import { PlaceModel } from '../../../main/types/models'
import { Coordinates } from '../../../main/types/place'

describe('Places middleware unit test', () => {
  let req: Request
  let res: Response
  let Place: jest.Mocked<PlaceModel>
  let getNearbyPlacesMw: RequestAsyncHandler
  beforeAll(() => {
    req = new Request()
    res = new Response()
    jest.doMock('../../../main/models/Place.model')
    ;({ Place } = require('../../../main/models/Place.model'))
    ;({ getNearbyPlacesMw } = require('../../../main/middlewares/places'))
  })
  afterAll(() => {
    jest.restoreAllMocks()
  })
  it('should retrieve places given origin and maxDistance', async () => {
    // Given
    const origin: Coordinates = [48.85884, 2.3473]
    const maxDistance = 1000
    const places = [
      {
        location: {
          coordinates: [48.85883, 2.350334] as Coordinates,
          type: 'Point',
        },
        properties: {
          address: {
            city: 'Paris',
            postalCode: '75004',
            street: '99 Rue de la Verrerie',
          },
          name: 'Hoct & Loca',
          rating: '4.1',
          type: 'a',
          website: 'https://www.hoctloca.com/',
        },
        type: 'PlacesSection',
      },
    ]
    req.body = {
      maxDistance,
      origin,
    }
    when(Place.getNear).calledWith(origin, 0, maxDistance).mockResolvedValue(places)
    // When
    await getNearbyPlacesMw(req as unknown as ExpressRequest, res as unknown as ExpressResponse)
    // Then
    expect(Place.getNear).toHaveBeenCalledWith(origin, 0, maxDistance)
    expect(res.json).toHaveBeenCalledWith(places)
  })
  it('should retrieve places given origin and minDistance', async () => {
    // Given
    const origin: Coordinates = [48.85884, 2.3473]
    const minDistance = 100
    const places = [
      {
        location: {
          coordinates: [48.85883, 2.350334] as Coordinates,
          type: 'Point',
        },
        properties: {
          address: {
            city: 'Paris',
            postalCode: '75004',
            street: '99 Rue de la Verrerie',
          },
          name: 'Hoct & Loca',
          rating: '4.1',
          type: 'a',
          website: 'https://www.hoctloca.com/',
        },
        type: 'PlacesSection',
      },
    ]
    req.body = {
      minDistance,
      origin,
    }
    when(Place.getNear).calledWith(origin, minDistance, 10000).mockResolvedValue(places)
    // When
    await getNearbyPlacesMw(req as unknown as ExpressRequest, res as unknown as ExpressResponse)
    // Then
    expect(Place.getNear).toHaveBeenCalledWith(origin, minDistance, 10000)
    expect(res.json).toHaveBeenCalledWith(places)
  })
  it('should respond with a 400 error given no origin provided', async () => {
    // Given
    const origin = undefined
    const minDistance = 100
    req.body = {
      minDistance,
      origin,
    }
    // When
    await getNearbyPlacesMw(req as unknown as ExpressRequest, res as unknown as ExpressResponse)
    // Then
    expect(Place.getNear).not.toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: "La requête doit avoir un point d'origine" })
  })
  it('should respond with a 400 error given neither minDistance nor maxDistance provided', async () => {
    // Given
    const origin: Coordinates = [48.85884, 2.3473]
    const maxDistance = undefined
    const minDistance = undefined
    req.body = {
      maxDistance,
      minDistance,
      origin,
    }
    // When
    await getNearbyPlacesMw(req as unknown as ExpressRequest, res as unknown as ExpressResponse)
    // Then
    expect(Place.getNear).not.toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: 'La requête doit avoir au moins un paramètre de distance',
    })
  })
  it('should respond with a 503 if Near request fails', async () => {
    // Given
    const origin: Coordinates = [48.85884, 2.3473]
    const maxDistance = 1000
    const error = new Error('oops')
    req.body = {
      maxDistance,
      origin,
    }
    when(Place.getNear).calledWith(origin, 0, maxDistance).mockRejectedValue(error)
    // When
    try {
      await getNearbyPlacesMw(req as unknown as ExpressRequest, res as unknown as ExpressResponse)
    } catch (err: any) {
      // Then
      expect(Place.getNear).toHaveBeenCalledWith(origin, 0, maxDistance)
      expect(err).toBeInstanceOf(InternalError)
      expect(err.message).toBe(error.message)
    }
  })
})
