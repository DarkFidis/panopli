import { IConfig } from 'config'
import { when } from 'jest-when'

describe('Config file unit tests', () => {
  let nodeConfig: jest.Mocked<IConfig>
  beforeAll(() => {
    jest.doMock('config')
    nodeConfig = require('config')
  })
  afterEach(() => {
    jest.resetModules()
  })
  it('should retrieve all config options', () => {
    // Given
    const logConfig = { level: 'debug', name: 'Panopli-local' }
    when(nodeConfig.has).calledWith('log').mockReturnValue(true)
    when(nodeConfig.get).calledWith('log').mockReturnValue(logConfig)
    // When
    const { log } = require('../../main/config')
    // Then
    expect(nodeConfig.has).toHaveBeenNthCalledWith(1, 'log')
    expect(nodeConfig.get).toHaveBeenNthCalledWith(1, 'log')
    expect(log).toStrictEqual(logConfig)
  })
  it('should retrieve all default config options', () => {
    // Given
    const logConfig = { level: 'debug', name: 'Panopli-local' }
    when(nodeConfig.has).calledWith('log').mockReturnValue(false)
    // When
    const { log } = require('../../main/config')
    // Then
    expect(nodeConfig.get).not.toHaveBeenCalled()
    expect(log).toStrictEqual(logConfig)
  })
})
