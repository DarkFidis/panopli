import * as React from 'react'

import { render } from "@testing-library/react";
import About from "../index";

describe('About component unit test', () => {
  it('should match snapshot', () => {
      const { container } = render(<About />)
      expect(container).toMatchSnapshot()
  })
})
