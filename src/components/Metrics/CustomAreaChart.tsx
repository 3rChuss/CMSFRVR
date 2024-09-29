import { AreaChart, Card, List, ListItem } from '@tremor/react'
import { IImpression } from 'interfaces/metrics'
import { FC } from 'react'
import { valueFormatter } from 'utils'
import customTooltip from './CustomTooltip'
import { useLoader } from 'context/loaderContext'

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
  const { loading } = useLoader()
  return (
    <>
      <Card className="w-full rounded-lg p-4 text-slate-400">
        <h3 className="mb-8 text-center text-lg font-semibold">
          {loading ? (
            <span className="mx-auto h-6 w-1/2 animate-pulse rounded bg-gray-500/50"></span>
          ) : (
            title
          )}
        </h3>
        {loading ? (
          <div className="h-64 w-full animate-pulse rounded bg-gray-500/10"></div>
        ) : (
          <AreaChart
            data={data}
            index="date"
            categories={categories}
            valueFormatter={valueFormatter}
            showLegend={false}
            showYAxis={true}
            showGradient={true}
            noDataText="No data available"
            startEndOnly={false}
            className="h-64 w-full fill-white text-slate-400"
            customTooltip={customTooltip}
          />
        )}
        <List className="mt-8">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <ListItem key={index}>
                  <div className="flex items-center space-x-2">
                    <span className="h-0.5 w-3 animate-pulse rounded bg-gray-500/50"></span>
                    <span className="h-4 w-32 animate-pulse rounded bg-gray-500/50"></span>
                  </div>
                  <span className="h-4 w-1/4 animate-pulse rounded bg-gray-500/50"></span>
                </ListItem>
              ))
            : summary.map((item) => (
                <ListItem key={item.name}>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <span
                      className={classNames(
                        statusColor[item.name],
                        'h-0.5 w-3'
                      )}
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
