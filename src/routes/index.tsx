import ProtectedRoutes from 'hoc/ProtectedRoutes'
import AuthPage from 'pages/Auth/AuthPage'
import Details from 'pages/Details'
import { FC, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const PageNotFound = lazy(() => import('../pages/404'))

const SiteRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {['/login', '/register'].map((route, index) => (
          <Route
            key={`auth-route-${index}`}
            path={route}
            element={<AuthPage />}
          />
        ))}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/overview" element={<Dashboard />} />
          <Route path="/details" element={<Details />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  )
}

export default SiteRouter
