import { BarList, Card } from '@tremor/react'
import { useLoader } from 'context/loaderContext'
import { FC } from 'react'
import { valueFormatter } from 'utils'

const pages = [
  {
    name: '/docs/components/tracker',
    value: 723
  },
  {
    name: '/docs/components/hero',
    value: 702
  },
  {
    name: '/docs/components/feature',
    value: 689
  },
  {
    name: '/docs/components/cta',
    value: 671
  },
  {
    name: '/docs/components/footer',
    value: 654
  }
]

const CustomBarList: FC = () => {
  const { loading, noData } = useLoader()
  return (
    <Card className="w-full rounded-lg p-4 text-slate-400">
      <div className="flex items-center justify-between border-b border-gray-300 p-6 dark:border-gray-700">
        <p className="font-medium text-slate-400">
          {loading ? (
            <span className="h-4 w-1/4 animate-pulse rounded bg-gray-500/50"></span>
          ) : (
            'Top pages'
          )}
        </p>
        <p className="text-sm font-medium uppercase text-slate-400">
          {loading ? (
            <span className="h-4 w-1/4 animate-pulse rounded bg-gray-500/50"></span>
          ) : (
            'Visitors'
          )}
        </p>
      </div>
      <div className="max-h-[260px] overflow-hidden p-6">
        {loading ? (
          Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="mb-4 flex items-center justify-between">
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-500/50 delay-0"></div>
              <div className="h-4 w-1/4 animate-pulse rounded bg-gray-500/50 delay-100"></div>
            </div>
          ))
        ) : (
          <BarList data={noData ? [] : pages} valueFormatter={valueFormatter} />
        )}
      </div>
    </Card>
  )
}

export default CustomBarList
