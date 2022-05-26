
import '@testing-library/jest-dom'
import { findByText, fireEvent, render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Controls from './Controls'

it('renders correctly', () => {
  const component = render(<Controls />)

  component.getByText('2')
  // expect(component.container).toHaveTextContent(/2/i)
})

describe('Controls component', () => {
  it('renders mode buttons correctly', () => {
    const component = render(<Controls />)

    component.getByRole('button', { name: 'Digit' })
  })

  it('clicking the mode button changes stuff', async () => {
    const component = render(<Controls />)

    const candidateButton = component.getByText(/candidate/i)
    fireEvent.click(candidateButton)

    const key = component.getByText('2')
    expect(key).toHaveClass('small')
  })

  it('pressing the correct key changes stuff', async () => {
    const component = render(<Controls />)

    const candidateButton = component.getByText(/candidate/i)
    const key = component.getByText('2')

    fireEvent.keyDown(candidateButton, { key: 'c', code: 'KeyC' })
    expect(key).toHaveClass('small')

    fireEvent.keyDown(candidateButton, { key: 'd', code: 'KeyD' })
    expect(key).not.toHaveClass('small')
  })

  it('pressing key of current mode doesn\'t change anything', async () => {
    const component = render(<Controls />)

    const candidateButton = component.getByText(/candidate/i)
    const key = component.getByText('2')

    fireEvent.keyDown(candidateButton, { key: 'd', code: 'KeyD' })
    expect(key).not.toHaveClass('small')
  })
})
