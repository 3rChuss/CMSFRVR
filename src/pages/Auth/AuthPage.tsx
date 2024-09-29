import LoginForm from 'components/Form/LoginForm'
import RegisterForm from 'components/Form/RegisterForm'
import { FC, memo, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const AuthPage: FC = () => {
  const location = useLocation()

  /**
   * Render the form based on the current location, used with memoization to prevent re-renders
   * @returns JSX.Element
   */
  const ActiveForm = useMemo(() => {
    if (location.pathname === '/login') {
      return <LoginForm />
    } else if (location.pathname === '/register') {
      return <RegisterForm />
    }
  }, [location.pathname])

  return (
    <div className="flex h-screen w-full flex-wrap bg-gray-800 text-gray-300 md:h-auto">
      {ActiveForm}
      <div className="w-1/2 shadow-none md:shadow-2xl">
        <img
          className="hidden h-screen w-full object-cover opacity-50 md:block"
          src="/images/crew160855.png"
        />
      </div>
    </div>
  )
}
export default memo(AuthPage)
