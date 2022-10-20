import { MongoClient } from "./services/mongo-client";
import { MongoClientable } from "./types/mongo";
import { log } from "./log";
import { mongo as config } from "./config";

const mongoClient: MongoClientable = new MongoClient(log, config)

export { mongoClient }
