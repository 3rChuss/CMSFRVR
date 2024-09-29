import { useLoader } from 'context/loaderContext'

/**
 * SimulatedOptions component provides a wrapper for simulated states
 * enabling the user to toggle between loading and no data states.
 * @returns {JSX.Element} The rendered SimulatedOptions component.
 */

const SimulatedOptions = () => {
  // Use custom hook to set states in the rest of the app.
  const { setLoading, loading, setNoData, noData } = useLoader()
  return (
    <div className="flex flex-col gap-2">
      <h5>Simulated States</h5>
      <div className="flex w-full items-center justify-end gap-6">
        <div
          className="flex items-center justify-end"
          onClick={() => setLoading(!loading)}
        >
          <label className="mr-2">Loading</label>
          <input
            type="checkbox"
            className="form-checkbox size-4 text-gray-600"
          />
        </div>
        <div
          className="flex items-center justify-end"
          onClick={() => setNoData(!noData)}
        >
          <label className="mr-2">No data</label>
          <input
            type="checkbox"
            className="form-checkbox size-4 text-gray-600"
          />
        </div>
      </div>
    </div>
  )
}

export default SimulatedOptions
