import { useLoader } from 'context/loaderContext'

const SimulatedOptions = () => {
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
