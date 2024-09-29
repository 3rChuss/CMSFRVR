import Avatar from 'components/Avatar'
import SimulatedOptions from 'components/Options/SimulatedOptions'
import Sidebar from 'components/Sidebar'
import { FC, ReactNode } from 'react'

/**
 * Layout component that provides a structured layout for the application.
 * @returns {JSX.Element} The rendered layout component.
 * @remarks
 * This component includes a sidebar, a header with an avatar, a simulated options section,
 * and a main content area where the children components are rendered.
 */
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
