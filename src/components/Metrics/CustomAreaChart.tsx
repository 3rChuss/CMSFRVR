import { AreaChart, Card, List, ListItem } from '@tremor/react'
import { IImpression } from 'interfaces/metrics'
import { FC } from 'react'
import customTooltip from './CustomTooltip'
import { valueFormatter } from 'utils'

interface ImpressionChart {
  title: string
  data: IImpression[]
  summary: { name: string; value: number }[]
  categories: string[]
}

const statusColor: { [key: string]: string } = {
  Impressions: 'bg-slate-500',
  'Ad Requests': 'bg-cyan-500',
  Revenue: 'bg-red-500'
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const CustomAreaChart: FC<ImpressionChart> = ({
  title,
  data,
  summary,
  categories
}) => {
  return (
    <>
      <Card className="w-full rounded-lg p-4 text-slate-400">
        <h3 className="mb-8 text-center text-lg font-semibold">{title}</h3>
        <AreaChart
          data={data}
          index="date"
          categories={categories}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={true}
          showGradient={false}
          startEndOnly={true}
          className="h-64 w-full fill-white text-black"
          customTooltip={customTooltip}
        />
        <List className="mt-8">
          {summary.map((item) => (
            <ListItem key={item.name}>
              <div className="flex items-center space-x-2 text-slate-400">
                <span
                  className={classNames(statusColor[item.name], 'h-0.5 w-3')}
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-slate-400">
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  )
}

export default CustomAreaChart
