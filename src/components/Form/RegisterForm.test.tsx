import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import RegisterForm from './RegisterForm'

const navigate = vi.fn()
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  MemoryRouter: ({ children }: { children: React.ReactNode }) => children,
  useNavigate: () => navigate,
  Link: ({ children }: { children: React.ReactNode }) => children
}))

describe('RegisterForm', () => {
  it('renders the form correctly', () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    )

    expect(screen.getByText('Create an account')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument()
  })

  it('displays the registration message and redirects after form submission', async () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByPlaceholderText('John'), {
      target: { value: 'Jesus' }
    })
    fireEvent.change(screen.getByPlaceholderText('John@domain.com'), {
      target: { value: 'Jesus@domain.com' }
    })
    fireEvent.click(screen.getByText(/Next/i))

    expect(
      screen.getByText(
        'We have sent you an email to verify your account. Please check your email'
      )
    ).toBeInTheDocument()
    expect(screen.getByText('Log in')).toBeInTheDocument()

    await new Promise((r) => setTimeout(r, 10000))
    expect(navigate).toHaveBeenCalledWith('/login')
  }, 20000)
})
