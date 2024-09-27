import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Sidebar from './index'

describe('Sidebar Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )
    expect(container).toBeInTheDocument()
  })

  it('should contain a link to /overview', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )
    const link = getByRole('link', { name: /overview/i })
    expect(link).toHaveAttribute('href', '/overview')
  })

  it('should render the Navigation component', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )
    const navigation = getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })
})
