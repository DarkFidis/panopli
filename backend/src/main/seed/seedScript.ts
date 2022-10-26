import {mongoClient} from "../mongo";
import {placesData} from "./data";
import {Place} from "../models/Place.model";

const seedScript = async () => {
  try {
    await mongoClient.start()
    const promises = placesData.map(place => {
      const newPlace = new Place(place)
      return newPlace.save()
    })
    await Promise.all(promises)
    await mongoClient.stop()
  } catch (err: any) {
    console.error(err.message)
  }
}

seedScript().then()
