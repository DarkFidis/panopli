import {Place} from "./place";

export type PlaceSectionProps = {
  activePlace: string
  places: Place[]
  setActivePlace: (id: string) => void
}
