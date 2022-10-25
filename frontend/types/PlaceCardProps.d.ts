import {Place} from "./place";

export type PlaceCardProps = {
  isActive: boolean
  place: Place
  setActivePlace: (id: string) => void
}
