import ProtectedRoutes from 'hoc/ProtectedRoutes'
import AuthPage from 'pages/Auth/AuthPage'
import { FC, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// lazy loading
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Details = lazy(() => import('../pages/Details'))
const PageNotFound = lazy(() => import('../pages/404'))

/**
 * SiteRouter component
 */
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
