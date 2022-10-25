import {Coordinates, NearOptions, Place} from "./place";

export type MapSectionProps = {
  activePlace: string
  distances: NearOptions | null
  places: Place[]
  origin: Optional<Coordinates>
  setOrigin: (origin: Coordinates) => void
  submitMethod: (options: NearOptions) => void
}
