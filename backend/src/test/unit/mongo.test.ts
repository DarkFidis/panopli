import {Loggerable} from "../../main/types/logger";
import {when} from "jest-when";

describe('mongo', () => {
  let log: jest.Mocked<Loggerable>
  let MongoClient
  const config = {
    url: 'mongodb://url'
  }
  beforeAll(() => {
    jest.doMock('../../main/log')
    ;({ log } = require('../../main/log'))
    jest.doMock('../../main/config', () => ({
      mongo: config
    }))
    jest.doMock('../../main/services/mongo-client')
    ;({ MongoClient } = require('../../main/services/mongo-client'))
  })
  afterAll(() => {
    jest.resetModules()
  })
  it('should export an instance of MongoClient', () => {
    // Given
    const mongoClient = jest.fn()
    when(MongoClient).calledWith(log, config).mockReturnValue(mongoClient)

    // When
    const result = require('../../main/mongo')
    // Then
    expect(MongoClient).toHaveBeenCalledWith(log, config)
    expect(result).toHaveProperty('mongoClient', mongoClient)
  })
})
