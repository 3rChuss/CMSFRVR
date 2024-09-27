import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { sidebarRoutes } from 'routes/routes'
import NavItem from './NavItem'

const Navigation: FC = () => {
  const location = useLocation()

  return (
    <div>
      {sidebarRoutes.map((route, index) => (
        <NavItem
          key={`nav-item-${index}`}
          href={`/${route.toLowerCase()}`}
          iconPath="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
          text={route}
          additionalClasses={`flex items-center justify-start w-full p-2 my-1 font-thin text-slate-400 transition-colors duration-200 hover:text-blue-500 ${
            location.pathname === `/${route.toLowerCase()}`
              ? 'border-r-4 border-blue-500 bg-gradient-to-r from-gray-700 to-transparent text-blue-500'
              : ''
          }`}
        />
      ))}
    </div>
  )
}

export default Navigation
