import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import Avatar from '.'

// mock the user hook
vi.mock('context/userContext', () => ({
  useUser: vi.fn().mockReturnValue({ user: { name: 'Jesus Abril' } })
}))

describe('Sidebar Component', () => {
  it('should render the user avatar', () => {
    render(
      <MemoryRouter>
        <Avatar />
      </MemoryRouter>
    )

    expect(screen.getByText('J')).toBeInTheDocument()
  })
})
