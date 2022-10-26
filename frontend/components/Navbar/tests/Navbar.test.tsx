import * as React from 'react'

import { render } from "@testing-library/react";
import Navbar from "../index";

describe('Navbar component unit test', () => {
  it('should match snapshot', () => {
    const { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })
})
