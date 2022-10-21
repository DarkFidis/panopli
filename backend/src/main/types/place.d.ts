import { Request, Response } from 'express'

import { Optional } from './basic-types'

export type PlaceAddress = {
  city: string
  postalCode: string
  street: string
}

export type Coordinates = [number, number]

export type PlaceLocation = {
  coordinates: Coordinates
  type: string
}

export type PlaceProperties = {
  address: PlaceAddress
  name: string
  rating: string
  type: string
  website: string
}

export interface Place {
  location: PlaceLocation
  type: string
  properties: PlaceProperties
}

export type PlaceInput = {
  maxDistance: Optional<number>
  minDistance: Optional<number>
  origin: Optional<Coordinates>
}

export type GetNearbyPlacesMw = (
  req: Request<unknown, unknown, PlaceInput>,
  res: Response,
) => Promise<void> | void
