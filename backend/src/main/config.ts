import * as nodeConfig from 'config'

import { Config } from './types/config'

export const log = nodeConfig.has('log')
  ? nodeConfig.get<Config['log']>('log')
  : { level: 'debug', name: 'Panopli-local' }

const mongoConfiguration = nodeConfig.has('mongo')
  ? nodeConfig.get<Config['mongo']>('mongo')
  : { dbName: 'tourisme', host: 'localhost:27017' }

const { MONGO_PASSWORD, MONGO_USER } = process.env
const { dbName, host } = mongoConfiguration
export const mongo = {
  url: `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${host}/${dbName}`,
}
