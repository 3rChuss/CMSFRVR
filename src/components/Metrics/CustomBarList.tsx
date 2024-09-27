import { BarList, Card } from '@tremor/react'
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
  return (
    <Card className="w-full rounded-lg p-4 text-slate-400">
      <div className="flex items-center justify-between border-b border-gray-300 p-6 dark:border-gray-700">
        <p className="font-medium text-slate-400">Top pages</p>
        <p className="text-sm font-medium uppercase text-slate-400">Visitors</p>
      </div>
      <div className="max-h-[260px] overflow-hidden p-6">
        <BarList data={pages} valueFormatter={valueFormatter} />
      </div>
    </Card>
  )
}

export default CustomBarList
