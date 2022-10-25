import { model, Schema } from 'mongoose'

import { PlaceModel } from '../types/models'
import { Place as Placeable } from '../types/place'

const placeSchema = new Schema<Placeable, PlaceModel>({
  location: {
    coordinates: {
      type: [Number],
    },
    type: {
      type: String,
    },
  },
  properties: {
    address: {
      city: {
        default: '',
        type: String,
      },
      postalCode: {
        default: '00000',
        type: String,
      },
      street: {
        default: '',
        type: String,
      },
    },
    name: String,
    rating: String,
    type: {
      default: 'r',
      type: String,
    },
    website: {
      default: '',
      type: String,
    },
  },
  type: {
    default: 'PlacesSection',
    type: String,
  },
})

placeSchema.statics.getNear = (origin, minDistance, maxDistance) =>
  Place.find({
    location: {
      $near: {
        $geometry: {
          coordinates: origin,
          type: 'Point',
        },
        $maxDistance: maxDistance,
        $minDistance: minDistance,
      },
    },
  }).exec()

export const Place = model<Placeable, PlaceModel>('Place', placeSchema)
