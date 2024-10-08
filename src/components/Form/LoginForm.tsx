import Button from 'components/Button'
import Input from 'components/Input'
import { useUser } from 'context/userContext'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm: FC = () => {
  const { setUser } = useUser()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    const submitButton = form.querySelector('button[type="submit"]')
    if (submitButton) {
      submitButton.setAttribute('disabled', 'true')
      submitButton.innerHTML = 'Redirecting...'
    }

    // Simulate a login request
    setTimeout(() => {
      setUser({
        name: 'John',
        surname: 'Doe',
        token: '1234567890'
      })

      // Redirect to the home page
      navigate('/overview')
    }, 1000)
  }

  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
        <a href="#" className="fill-white p-4 text-xl font-bold">
          <img src="/logo.svg" alt="Logo" />
        </a>
      </div>
      <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
        <p className="text-center text-3xl">Welcome back.</p>
        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col pt-4">
            <div className="relative flex items-center">
              <span className="absolute right-0 top-0 self-end p-4 text-sm text-gray-500">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                </svg>
              </span>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="mb-12 flex flex-col pt-4">
            <div className="relative flex items-center">
              <span className="absolute right-0 top-0 self-end p-4 text-sm text-gray-500">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>
          <Button type="submit" color="primary" text="Login" />
        </form>
        <div className="py-12 text-center">
          <p>
            Don&#x27;t have an account?
            <Link to="/register" className="px-2 font-semibold underline">
              Register here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
