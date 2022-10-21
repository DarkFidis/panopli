import { Model } from 'mongoose'

import { Coordinates, Place } from './place'

export interface PlaceModel extends Model<Place> {
  getNear(origin: Coordinates, min: number, max: number): Promise<Place[]>
}
