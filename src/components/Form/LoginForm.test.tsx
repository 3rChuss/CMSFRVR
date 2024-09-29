import { fireEvent, render, screen } from '@testing-library/react'
import { UserProvider } from 'context/userContext'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import LoginForm from './LoginForm'

vi.mock('context/userContext', () => ({
  useUser: vi.fn().mockReturnValue({
    user: { name: 'Jesus Abril' },
    setUser: vi.fn()
  }),
  UserProvider: ({ children }: { children: React.ReactNode }) => children
}))

const mockedNavigate = vi.fn()
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  MemoryRouter: ({ children }: { children: React.ReactNode }) => children,
  Link: ({ children }: { children: React.ReactNode }) => children,
  useNavigate: () => vi.fn()
}))

describe('LoginForm', () => {
  it('renders the login form', () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <LoginForm />
        </UserProvider>
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('disables the submit button and shows redirecting text on submit', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <LoginForm />
        </UserProvider>
      </MemoryRouter>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const submitButton = screen.getByText('Login')

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    fireEvent.click(submitButton)

    expect(submitButton).toBeDisabled()
    expect(submitButton).toHaveTextContent('Redirecting...')
  })

  it('redirects to the overview page after successful login', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <LoginForm />
        </UserProvider>
      </MemoryRouter>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const submitButton = screen.getByText('Login')

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    fireEvent.click(submitButton)

    expect(submitButton).toHaveTextContent('Redirecting...')
  })
})
