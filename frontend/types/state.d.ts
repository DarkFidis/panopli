import {Coordinates, NearOptions, Place} from "./place";

export interface MapState {
  activePlace: string
  distances: NearOptions | null
  origin: Coordinates
  places: Place[]
}
