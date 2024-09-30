import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Dashboard from './index'
import { LoaderContext } from 'context/loaderContext'

describe('Dashboard', () => {
  const mockLoad = vi.fn()
  const mockNoData = false

  const renderWithContext = (component: JSX.Element) => {
    return render(
      <LoaderContext.Provider value={{ load: mockLoad, noData: mockNoData }}>
        {component}
      </LoaderContext.Provider>
    )
  }

  it('renders without crashing', () => {
    renderWithContext(<Dashboard />)
    expect(screen.getByText(/Overview/i)).toBeInTheDocument()
  })

  it('initial state is set correctly', () => {
    renderWithContext(<Dashboard />)
    expect(mockLoad).toHaveBeenCalled()
  })

  it('fetchMetrics is called on mount', async () => {
    renderWithContext(<Dashboard />)
    await waitFor(() => expect(mockLoad).toHaveBeenCalled())
  })

  it('calculates summary correctly', async () => {
    const mockData = {
      impressions: [
        { impressions: 100, ad_requests: 50, revenue: 10 },
        { impressions: 200, ad_requests: 100, revenue: 20 }
      ],
      kpis: [],
      metrics: { ad_requests: 0, dailyImpressions: 0, revenue: 0 }
    }

    vi.spyOn(global, 'fetch').mockImplementation((url) => {
      console.log(url)
      switch (url) {
        case './const/daily.json':
          return Promise.resolve({
            json: () => Promise.resolve({ metrics: mockData.metrics })
          })
        case './const/impressions.json':
          return Promise.resolve({
            json: () => Promise.resolve(mockData.impressions)
          })
        case './const/kpis.json':
          return Promise.resolve({
            json: () => Promise.resolve(mockData.kpis)
          })
        default:
          return Promise.reject(new Error('Unknown URL'))
      }
    })

    renderWithContext(<Dashboard />)
    await waitFor(() => {
      const summary = screen.getByText(/Impressions/i)
      expect(summary).toBeInTheDocument()
    })
  })

  it('renders child components', () => {
    renderWithContext(<Dashboard />)

    expect(screen.getByText(/Follower metrics/i)).toBeInTheDocument()
    expect(
      screen.getByText('Want to improve your metrics ?')
    ).toBeInTheDocument()
  })
})
