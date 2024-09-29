import { useLoader } from 'context/loaderContext'
import { IMetrics } from 'interfaces/metrics'
import { FC } from 'react'
import { valueFormatter } from 'utils'

interface RevenueProps {
  data: IMetrics
}

const Revenue: FC<RevenueProps> = ({ data }) => {
  const { loading } = useLoader()

  return (
    <div className="my-6 flex w-full flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="w-full">
        <div className="relative w-full overflow-hidden border border-slate-300 bg-transparent shadow-lg">
          <div className="block size-full">
            <h2 className="ml-4 mt-2 text-xl font-semibold text-white dark:text-white">
              Report
            </h2>
            <div className="flex flex-wrap items-center justify-center space-x-4 px-4 py-6 md:flex-nowrap md:justify-between">
              <div className="flex items-center">
                <span className="relative rounded-full bg-yellow-100 p-5">
                  <svg
                    width="40"
                    fill="currentColor"
                    height="40"
                    className="absolute left-1/2 top-1/2 h-5 -translate-x-1/2 -translate-y-1/2 text-yellow-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                  </svg>
                </span>
                <p
                  className={`ml-2 text-xl font-semibold ${
                    loading
                      ? 'h-6 w-24 animate-pulse rounded-lg bg-gray-500/50'
                      : 'border-b border-gray-200 text-white dark:text-white'
                  }`}
                >
                  {loading ? '' : `${valueFormatter(data.revenue)} $ Revenue`}
                </p>
              </div>
              <div className="flex items-center gap-16">
                <div
                  className={`mt-6 text-xl font-bold ${
                    loading
                      ? 'h-6 w-24 animate-pulse rounded-lg bg-gray-500/50'
                      : 'border-b border-gray-200 text-white dark:text-white'
                  } md:mt-0`}
                >
                  {loading ? '' : data.dailyImpressions}
                  {!loading && (
                    <span className="text-xs text-gray-400"> views</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Revenue
