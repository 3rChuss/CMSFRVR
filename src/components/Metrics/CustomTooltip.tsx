import { CustomTooltipProps } from '@tremor/react'
import { valueFormatter } from 'utils'

const customTooltip = (props: CustomTooltipProps) => {
  const { payload, active } = props
  if (!active || !payload) return null

  if (!payload) return null

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-gray-100 p-4 text-black shadow-lg dark:bg-gray-800">
      {payload.map((categoryPayload) => (
        <div
          className="flex w-full justify-between gap-8"
          key={categoryPayload.dataKey}
        >
          <div className="flex items-center space-x-2 truncate">
            <span className="h-0.5 w-3" aria-hidden={true} />
            <p className="text-sm">{categoryPayload.dataKey}</p>
          </div>
          <p>
            {valueFormatter(
              typeof categoryPayload.value === 'number'
                ? categoryPayload.value
                : 0
            )}
          </p>
        </div>
      ))}
    </div>
  )
}

export default customTooltip
