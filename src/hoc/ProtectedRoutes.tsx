import Layout from 'components/Layout'
import { LoaderProvider } from 'context/loaderContext'
import { useUser } from 'context/userContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes: React.FC = () => {
  const { user } = useUser()

  if (!user.token) {
    return <Navigate to="/login" />
  }

  return (
    <LoaderProvider>
      <Layout>
        <Outlet />
      </Layout>
    </LoaderProvider>
  )
}

export default ProtectedRoutes
