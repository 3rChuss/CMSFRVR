import { Card } from '@tremor/react'
import { useLoader } from 'context/loaderContext'
import { IKPI } from 'interfaces/metrics'
import { FC } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface DailyKPICardProps {
  data: IKPI[]
}

const DailyKPICard: FC<DailyKPICardProps> = ({ data }) => {
  const { loading } = useLoader()
  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <dt className="h-4 w-1/2 animate-pulse rounded bg-gray-500/50 font-medium text-slate-400 delay-0"></dt>
                <dd className="mt-2 flex items-baseline space-x-2.5">
                  <span className="h-6 w-1/4 animate-pulse rounded bg-gray-500/50 font-semibold text-white delay-75" />
                  <span className="h-4 w-1/4 animate-pulse rounded bg-gray-500/50 font-medium delay-75" />
                </dd>
              </Card>
            ))
          : data.map((item) => (
              <Card key={item.name}>
                <dt className="font-medium text-slate-400">{item.name}</dt>
                <dd className="mt-2 flex items-baseline space-x-2.5">
                  <span className="font-semibold text-white">{item.stat}</span>
                  <span
                    className={classNames(
                      item.changeType === 'positive'
                        ? 'text-emerald-700 dark:text-emerald-500'
                        : 'text-red-700 dark:text-red-500',
                      'font-medium'
                    )}
                  >
                    {item.change}
                  </span>
                </dd>
              </Card>
            ))}
      </dl>
    </>
  )
}

export default DailyKPICard
