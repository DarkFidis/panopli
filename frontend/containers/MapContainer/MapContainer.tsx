import React, {useState} from "react";
import {PlacesSection} from "../../components/PlacesSection";
import {Coordinates, NearOptions, Place} from "../../types/place";
import {fetchPlaces} from "../../services/fetchPlaces.service";
import {MapSection} from "../../components/MapSection";

export const MapTainer: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([])
  const [origin, setOrigin] = useState<Coordinates | null>(null)
  const [distances, setDistances] = useState<NearOptions | null>(null)
  const [activePlace, setActivePlace] = useState<string>('')
  const nearRequestHandler = (options: NearOptions) => {
    const { minDistance, maxDistance } = options
    if (!origin) {
      console.error('No origin available for request')
      return
    }
    const body = {
      origin,
      maxDistance,
      minDistance,
    }
    fetchPlaces(body).then(places => {
      console.log({ place: places[0]})
      setPlaces(places)
      setDistances({ maxDistance, minDistance })
    }).catch(err => console.error(err.message))
  }
  const changeOrigin = (origin: Coordinates) => {
    setOrigin(origin)
    setPlaces([])
    setDistances(null)
  }
  return (
    <>
      <MapSection
        activePlace={activePlace}
        distances={distances}
        places={places}
        origin={origin}
        setOrigin={changeOrigin}
        submitMethod={nearRequestHandler}
      />
      <PlacesSection activePlace={activePlace} places={places} setActivePlace={setActivePlace} />
    </>
  )
}

export default MapTainer
