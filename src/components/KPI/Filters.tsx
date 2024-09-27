import { FC } from 'react'

const Filters: FC = () => {
  // date picker from date to date
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
        />
      </div>
    </div>
  )
}

export default Filters
