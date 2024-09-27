// 'use client';

import { Card } from '@tremor/react'
import { IKPI } from 'interfaces/metrics'
import { FC } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface DailyKPICardProps {
  data: IKPI[]
}

const DailyKPICard: FC<DailyKPICardProps> = ({ data }) => {
  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="font-medium text-slate-400 ">{item.name}</dt>
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
