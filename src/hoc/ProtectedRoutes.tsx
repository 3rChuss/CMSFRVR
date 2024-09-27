import Layout from 'components/Layout'
import { useUser } from 'context/userContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes: React.FC = () => {
  const { user } = useUser()

  if (!user.token) {
    return <Navigate to="/login" />
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default ProtectedRoutes
