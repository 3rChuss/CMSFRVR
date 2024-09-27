import { FC } from 'react'

const PageNotFound: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
      </div>
    </div>
  )
}

export default PageNotFound
