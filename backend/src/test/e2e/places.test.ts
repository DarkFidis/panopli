import { client } from './utils/client-helper'
import { e2eServer } from './utils/e2e-server'

describe('e2e tests', () => {
  beforeAll(() => e2eServer.start())
  afterAll(() => e2eServer.stop())
  describe('Places Mws', () => {
    it('should retrieve some places given origin and distances', async () => {
      // Given
      const origin = [48.85884, 2.3473]
      const maxDistance = 1000
      // When
      const response = await client.post('api/places', {
        json: {
          maxDistance,
          origin,
        },
      })
      // Then
      expect(response.statusCode).toEqual(200)
      expect(response.body.length).not.toBe(0)
    })
  })
})
