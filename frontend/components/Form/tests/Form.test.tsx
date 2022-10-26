import * as React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import Form from '../Form.component'

describe('Form component unit test', () => {
  it('renders Form component', () => {
    // Given
    const origin = [48.85884, 2.3473]
    const submit = () => {}
    // When
    const { container } = render(<Form origin={origin} submit={submit} />)
    // Then
    expect(container).toBeInTheDocument();
  })
  it('should trigger submit prop when click on submit button', async () => {
    const origin = [48.85884, 2.3473]
    const submit = jest.fn()
    // When
    render(<Form origin={origin} submit={submit} />)
    // Then
    await waitFor(() => {
      const submitButton = screen.getByRole('button')
      submitButton.click()
      expect(submit).toHaveBeenCalled()
    })
  })
  it('button should be disabled given no origin prop', () => {
    const origin = null
    const submit = jest.fn()
    // When
    render(<Form origin={origin} submit={submit} />)
    // Then
    const submitButton = screen.getByRole('button')
    expect(submitButton).toHaveProperty('disabled', true)
  })
  it('should match snapshot', () => {
    // Given
    const origin = [48.85884, 2.3473]
    const submit = () => {}
    // When
    const { container } = render(<Form origin={origin} submit={submit} />)
    // Then
    expect(container).toMatchSnapshot()
  })
})
