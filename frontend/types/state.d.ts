import {Coordinates, NearOptions, Place} from "./place";

export interface MapState {
  activePlace: string
  distances: NearOptions | null
  nearError: string | undefined
  origin: Coordinates
  places: Place[]
}
