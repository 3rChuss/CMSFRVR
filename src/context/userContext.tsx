import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState
} from 'react'

// Define the shape of the user state
interface UserState {
  name: string
  surname: string
  token: string
}

// Define the shape of the context value
interface UserContextValue {
  user: UserState
  setUser: React.Dispatch<React.SetStateAction<UserState>>
}

// Create the context with a default value
const UserContext = createContext<UserContextValue | undefined>(undefined)

// Define the UserProvider component
interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserState>({
    name: '',
    surname: '',
    token: ''
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook to use the UserContext
export const useUser = (): UserContextValue => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
