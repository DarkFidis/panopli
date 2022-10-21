import { InternalError } from '../errors/internal-error'
import { Place } from '../models/Place.model'
import { GetNearbyPlacesMw } from '../types/place'

export const getNearbyPlacesMw: GetNearbyPlacesMw = async (req, res) => {
  const { origin, maxDistance, minDistance } = req.body
  if (!origin) {
    res.status(400).json({ error: "La requête doit avoir un point d'origine" })
    return
  }
  if (!maxDistance && !minDistance) {
    res.status(400).json({ error: 'La requête doit avoir au moins un paramètre de distance' })
    return
  }
  const min = minDistance ? minDistance : 0
  const max = maxDistance ? maxDistance : 10000
  try {
    const places = await Place.getNear(origin, min, max)
    res.json(places)
  } catch (err: any) {
    throw new InternalError(err.message as string)
  }
}
