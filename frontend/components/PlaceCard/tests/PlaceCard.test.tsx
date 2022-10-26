import * as React from 'react'

import { render } from "@testing-library/react";
import PlaceCard from "../index";

describe('PlaceCard component unit test', () => {
  it('should match snapshot when inactive', () => {
    // Given
    const props = {
      active: false,
      place: {"location":{"type":"Point","coordinates":[48.86172,2.342443]},"properties":{"address":{"street":"121 Rue Saint-Honoré","postalCode":"75001","city":"Paris"},"website":"https://www.yamtcha.com/","type":"b","name":"Yam'Tcha","rating":4.6},"type":"Feature"},
      setActivePlace: () => {}
    }
    const { container } = render(<PlaceCard {...props} />)
    expect(container).toMatchSnapshot()
  })
  it('should match snapshot when active', () => {
    // Given
    const props = {
      active: true,
      place: {"location":{"type":"Point","coordinates":[48.86172,2.342443]},"properties":{"address":{"street":"121 Rue Saint-Honoré","postalCode":"75001","city":"Paris"},"website":"https://www.yamtcha.com/","type":"b","name":"Yam'Tcha","rating":4.6},"type":"Feature"},
      setActivePlace: () => {}
    }
    const { container } = render(<PlaceCard {...props} />)
    expect(container).toMatchSnapshot()
  })
})
