import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Button from '.'

describe('Button Component', () => {
  it('should render the button with the correct text', () => {
    render(<Button text="Click Me" />)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('should apply primary styles by default', () => {
    render(<Button text="Primary Button" />)
    const button = screen.getByText('Primary Button')
    expect(button).toHaveClass('bg-blue-500')
  })

  it('should apply secondary styles when color is secondary', () => {
    render(<Button text="Secondary Button" color="secondary" />)
    const button = screen.getByText('Secondary Button')
    expect(button).toHaveClass('bg-gray-700')
  })

  it('should be disabled when disabled prop is passed', () => {
    render(<Button text="Disabled Button" disabled />)
    const button = screen.getByText('Disabled Button')
    expect(button).toBeDisabled()
  })
})
