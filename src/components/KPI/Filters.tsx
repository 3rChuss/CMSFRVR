import { useLoader } from 'context/loaderContext'
import { FC, useRef, useState } from 'react'

const Filters: FC = () => {
  const { loading, setLoading } = useLoader()
  const dateFromRef = useRef<HTMLInputElement>(null)
  const dateToRef = useRef<HTMLInputElement>(null)
  const [dates, setDates] = useState<{ from: string; to: string }>({
    from: '',
    to: new Date().toISOString().split('T')[0]
  })

  const filterData = () => {
    // check if the dates are valid and from date is less than to date
    if (dates.from && dates.to && dates.from <= dates.to) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 700)
    } else {
      // check which date is invalid and show an error message
      if (dateFromRef.current!.value > dateToRef.current!.value) {
        dateFromRef.current!.setCustomValidity(
          'From date should be less than To date'
        )
        dateFromRef.current!.reportValidity()
      }
    }
  }

  return (
    <div className="flex w-full items-center justify-start gap-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="from" className="text-sm font-medium text-slate-400">
          From
        </label>
        <input
          type="date"
          id="from"
          name="from"
          className="h-8 w-32 rounded-md border border-gray-300 px-2 text-sm focus:outline-none focus:ring focus:ring-blue-500"
          disabled={loading}
          ref={dateFromRef}
          onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDates({ ...dates, from: e.target.value })
          }
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="to" className="text-sm font-medium text-slate-400">
          To
        </label>
        <input
          type="date"
          id="to"
          name="to"
          className="h-8 w-32 rounded-md border border-gray-300 px-2 text-sm focus:outline-none focus:ring focus:ring-blue-500"
          disabled={loading}
          ref={dateToRef}
          defaultValue={new Date().toISOString().split('T')[0]}
          max={new Date().toISOString().split('T')[0]}
          onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDates({ ...dates, to: e.target.value })
          }
        />
      </div>
      <button
        className="h-8 rounded-md bg-blue-500 px-4 font-semibold text-white disabled:opacity-50"
        disabled={loading || !dates.from || !dates.to}
        onClick={() => filterData()}
      >
        Apply
      </button>
    </div>
  )
}

export default Filters
