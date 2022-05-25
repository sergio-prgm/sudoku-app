
import '@testing-library/jest-dom'
import { findByText, fireEvent, render } from '@testing-library/react'
import { it } from 'vitest'
import Controls from './Controls'

it('renders correctly', () => {
  const component = render(<Controls />)

  component.getByText('2')
  // expect(component.container).toHaveTextContent(/2/i)
})

it('renders buttons', () => {
  const component = render(<Controls />)

  component.getByRole('button', { name: 'Digit' })
})

it('clicking the button changes stuff', async () => {
  const component = render(<Controls />)

  const candidateButton = component.getByText(/candidate/i)
  fireEvent.click(candidateButton)

  const key = component.getByText('2')
  expect(key).toHaveClass('small')
})
