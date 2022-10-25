export interface LogConfig {
  level: string
  name: string
}

export interface MongoConf {
  dbName: string
  host: string
}

export interface Config {
  log: LogConfig
  mongo: MongoConf
}
