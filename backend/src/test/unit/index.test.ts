import { when } from 'jest-when'

import { Workerable } from '../../main/types/worker'
import { Logger } from '../../main/utils/logger'

describe('index unit tests', () => {
  let processExitSpy: jest.SpyInstance
  let log: jest.Mocked<Logger>
  beforeEach(() => {
    jest.doMock('../../main/log')
    ;({ log } = require('../../main/log'))
    jest.doMock('../../main/services/web-server')
    processExitSpy = jest.spyOn(process, 'exit').mockImplementation()
  })
  afterEach(() => {
    processExitSpy.mockRestore()
    jest.resetModules()
  })
  test('should import and execute worker', () => {
    // Given
    jest.doMock('../../main/worker')
    const runWorker: jest.MockedFunction<Workerable['run']> = require('../../main/worker').run
    when(runWorker).calledWith().mockResolvedValue()
    // When
    require('../../main/index')
    // Then
    expect(runWorker).toHaveBeenCalledWith()
  })
  test('should log error and exit process when worker start crashes', (done) => {
    // Given
    const err = new Error('oops')
    jest.doMock('../../main/worker')
    const runWorker: jest.MockedFunction<Workerable['run']> = require('../../main/worker').run
    when(runWorker).calledWith().mockRejectedValue(err)
    // When
    require('../../main/index')
    // Then
    expect(runWorker).toHaveBeenCalledWith()
    setImmediate(() => {
      expect(log.error).toHaveBeenCalledWith(err)
      expect(processExitSpy).toHaveBeenCalledWith(1)
      done()
    })
  })
})
