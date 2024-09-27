import Sidebar from 'components/Sidebar'
import Avatar from 'components/Avatar'
import { FC, ReactNode } from 'react'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen gap-1 bg-gray-900">
      <Sidebar />

      <div className="h-full flex-1 overflow-auto px-2 py-4 lg:px-4">
        <header className="flex items-center justify-end border-b border-gray-700 p-4">
          <Avatar alt="Avatar" />
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
export default Layout
