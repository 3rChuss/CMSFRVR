import Avatar from 'components/Avatar'
import SimulatedOptions from 'components/Options/SimulatedOptions'
import Sidebar from 'components/Sidebar'
import { FC, ReactNode } from 'react'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen gap-1 bg-gray-900">
      <Sidebar />

      <div className="h-full flex-1 overflow-auto px-2 py-4 lg:px-4">
        <header className="relative flex items-center justify-end border-b border-gray-700 p-4">
          <Avatar alt="Avatar" />
        </header>
        <div className="flex justify-end bg-gradient-to-r from-gray-900 to-gray-800 p-2 text-white">
          <SimulatedOptions />
        </div>

        <main>{children}</main>
      </div>
    </div>
  )
}
export default Layout
