import {httpClient} from "./httpClient";
import {Place, PlaceInput} from "../types/place";

export const fetchPlaces =  async (input: PlaceInput): Promise<Place[]> => {
  const { origin, maxDistance, minDistance } = input
  const response = await httpClient.post('/places', input)
  return response.data
}
