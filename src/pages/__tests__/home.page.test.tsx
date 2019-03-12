import React from 'react'
import { act, fireEvent, render } from 'react-testing-library'
import { Home } from '../home.page'

describe('BoxContent', () => {
  it('should render properly', () => {
    const { getByText } = render(<Home />)
    const homeText = getByText('Home')
    expect(homeText).toBeDefined()
  })

  it('should display random property', () => {
    const { getByText } = render(<Home />)
    const randomProperty = getByText('JANNE')
    expect(randomProperty).toBeDefined()
  })

  it('should display default toggle value', () => {
    const { getByText } = render(<Home />)
    const toggleVaue = getByText(/false/i)
    expect(toggleVaue).toBeDefined()
  })

  it('should toggle value', async () => {
    const { getByText } = render(<Home />)

    const button = getByText(/Toggle me/i)
    act(() => void fireEvent.click(button))

    const toggleVaue = getByText(/true/i)
    expect(toggleVaue).toBeDefined()
  })
})
