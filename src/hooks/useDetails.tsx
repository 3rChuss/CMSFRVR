import { IDetailsData } from 'interfaces/metrics'
import { useEffect, useState } from 'react'

/**
 * useDetails hook fetches details data from api.
 * @param id
 */
const useDetails = (id: string) => {
  const [data, setData] = useState<IDetailsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`./const/${id}.json`)
        const data = await response.json()
        setData(data)
        // Simulate loading
        setTimeout(() => setLoading(false), 1000)
      } catch (error) {
        console.error('Error fetching details:', error)
        setError(error as Error)
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { data, loading, error }
}

export default useDetails
