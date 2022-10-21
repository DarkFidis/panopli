import { when } from 'jest-when'

import { PlaceModel } from '../../../main/types/models'
import { Coordinates } from '../../../main/types/place'

describe('Place model', () => {
  describe('export', () => {
    let Schema: jest.Mock
    let model: jest.Mock
    beforeAll(() => {
      jest.doMock('mongoose')
      ;({ model, Schema } = require('mongoose'))
    })
    afterAll(() => {
      jest.restoreAllMocks()
      jest.resetModules()
      jest.unmock('mongoose')
    })
    it('should export Place model', () => {
      // Given
      Schema.mockReturnValue({
        statics: {},
      })
      // When
      const result = require('../../../main/models/Place.model')
      // Then
      expect(Schema).toHaveBeenCalled()
      expect(model).toHaveBeenCalled()
      expect(result).toBeTruthy()
    })
  })
  describe('getNear', () => {
    let findSpy: jest.SpyInstance
    let Place: PlaceModel
    beforeAll(() => {
      ;({ Place } = require('../../../main/models/Place.model'))
      findSpy = jest.spyOn(Place, 'find').mockImplementation()
    })
    afterAll(() => {
      findSpy.mockRestore()
    })
    it('should retrieve all places nearby given origin', async () => {
      // Given
      const origin: Coordinates = [48.85884, 2.3473]
      const minDistance = 0
      const maxDistance = 1000
      const nearOptions = {
        location: {
          $near: {
            $geometry: {
              coordinates: origin,
              type: 'Point',
            },
            $maxDistance: maxDistance,
            $minDistance: minDistance,
          },
        },
      }
      const expectedResult = []
      const execMock = jest.fn()
      when(findSpy).calledWith(nearOptions).mockReturnValue({ exec: execMock })
      when(execMock).calledWith().mockResolvedValue(expectedResult)
      // When
      const result = await Place.getNear(origin, minDistance, maxDistance)
      // Then
      expect(findSpy).toHaveBeenCalledWith(nearOptions)
      expect(execMock).toHaveBeenCalled()
      expect(result).toEqual(expectedResult)
    })
  })
})
