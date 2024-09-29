import { createContext, FC, ReactNode, useContext, useState } from 'react'

type LoaderContextType = {
  load: (fn: () => Promise<void>) => Promise<void>
  loading: boolean
  noData: boolean
  setLoading: (loading: boolean) => void
  setNoData: (noData: boolean) => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

/**
 * Custom context and hook to simulate loading and
 * no data states for technical reviews proposes.
 */
export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext)
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider')
  }
  return context
}

interface LoaderProviderProps {
  children: ReactNode
}

export const LoaderProvider: FC<LoaderProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [noData, setNoData] = useState<boolean>(false)

  const load = async (fn: () => Promise<void>): Promise<void> => {
    try {
      await fn()
    } finally {
      setTimeout(() => setLoading(false), 1000) // Simula un retraso en el estado de carga
    }
  }

  return (
    <LoaderContext.Provider
      value={{ loading, load, setLoading, setNoData, noData }}
    >
      {children}
    </LoaderContext.Provider>
  )
}
