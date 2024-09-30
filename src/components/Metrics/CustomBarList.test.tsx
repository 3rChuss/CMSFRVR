import { render, screen } from '@testing-library/react'
import { LoaderContext } from 'context/loaderContext'
import { describe, expect, it, vi } from 'vitest'
import CustomBarList from './CustomBarList'

vi.mock('utils', () => ({
  valueFormatter: vi.fn((value) => `Formatted ${value}`)
}))

describe('CustomBarList', () => {
  const renderWithContext = (
    component: JSX.Element,
    loading: boolean,
    noData: boolean
  ) => {
    return render(
      <LoaderContext.Provider
        value={{
          loading,
          noData,
          setLoading: vi.fn(),
          setNoData: vi.fn(),
          load: vi.fn()
        }}
      >
        {component}
      </LoaderContext.Provider>
    )
  }

  it('renders without crashing', () => {
    renderWithContext(<CustomBarList />, false, false)
    expect(screen.getByText(/Top pages/i)).toBeInTheDocument()
    expect(screen.getByText(/Visitors/i)).toBeInTheDocument()
  })

  it('displays no data state correctly', () => {
    renderWithContext(<CustomBarList />, false, true)
    expect(
      screen.queryByText(/\/docs\/components\/tracker/i)
    ).not.toBeInTheDocument()
  })

  it('displays data correctly', () => {
    renderWithContext(<CustomBarList />, false, false)
    expect(screen.getByText(/\/docs\/components\/tracker/i)).toBeInTheDocument()
    expect(screen.getByText(/Formatted 723/i)).toBeInTheDocument()
  })
})
