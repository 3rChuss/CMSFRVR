import Button from 'components/Button'
import Input from 'components/Input'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterForm: FC = () => {
  const navigate = useNavigate()
  const [showRegisterMsg, setShowRegisterMsg] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    const submitButton = form.querySelector('button[type="submit"]')
    if (submitButton) {
      submitButton.setAttribute('disabled', 'true')
      submitButton.innerHTML = 'Redirecting...'
    }

    setShowRegisterMsg(true)

    setTimeout(() => {
      navigate('/login')
    }, 10000)
  }

  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
        <a href="#" className="fill-white p-4 text-xl font-bold">
          <img src="/logo.svg" alt="Logo" />
        </a>
      </div>
      <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
        {!showRegisterMsg ? (
          <>
            <p className="text-center text-3xl">Create an account</p>
            <form
              className="flex w-full flex-col pb-4 pt-3 md:pt-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-row flex-wrap gap-4 md:flex-nowrap">
                <div className="flex w-full flex-col pt-4 md:w-1/2">
                  <Input
                    label="Name"
                    type="text"
                    id="name"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="flex w-full flex-col pt-4 md:w-1/2">
                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    placeholder="John@domain.com"
                    required
                  />
                </div>
              </div>
              <div className="mt-8 flex w-full items-start justify-end">
                <div className="w-32">
                  <Button type="submit" color="primary" text="Next" />
                </div>
              </div>
            </form>
            <div className="py-12 text-center">
              <p>
                Do you have an account?{' '}
                <Link to="/login" className="px-2 font-semibold underline">
                  Log in
                </Link>
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center pt-4">
            <p className="text-center text-lg">
              We have sent you an email to verify your account. Please check
              your email
            </p>
            <Link
              to="/login"
              className="my-8 px-2 text-xl font-semibold underline"
            >
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default RegisterForm
