import {Place, PlaceInput} from "../types/place";
import axios from "axios";

export const fetchPlaces =  async (input: PlaceInput): Promise<Place[]> => {
  const apiUrl = process.env.NODE_ENV === 'production' ? '/api/places' : 'http://localhost:5000/api/places'
  const response = await axios.post(apiUrl, input)
  return response.data
}
