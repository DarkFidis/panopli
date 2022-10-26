import * as React from 'react'

import { render } from "@testing-library/react";
import Footer from "../index";

describe('Footer component unit test', () => {
  it('should match snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
