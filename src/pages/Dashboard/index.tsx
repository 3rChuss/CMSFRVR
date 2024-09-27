import UpgradeCTA from 'components/CTA/Upgrade'
import DailyKPICard from 'components/KPI/Daily'
import Filters from 'components/KPI/Filters'
import CustomAreaChart from 'components/Metrics/CustomAreaChart'
import CustomBarList from 'components/Metrics/CustomBarList'
import Revenue from 'components/Metrics/Revenue'
import { IImpression, IKPI, IMetrics } from 'interfaces/metrics'
import { FC, useEffect, useMemo, useState } from 'react'

const Dashboard: FC = () => {
  const [data, setData] = useState<{
    impressions: IImpression[]
    kpis: IKPI[]
    metrics: IMetrics
  }>({
    impressions: [],
    kpis: [],
    metrics: {
      ad_requests: 0,
      dailyImpressions: 0,
      revenue: 0
    }
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMetrics()
  }, [])

  /**
   * Fetch the metrics data from the JSON files simulating an API call
   */
  const fetchMetrics = async () => {
    try {
      const response = await fetch('./const/daily.json')
      const dailyData = await response.json()
      const { metrics } = dailyData

      const [impressions, kpis] = await Promise.all([
        fetch('./const/impressions.json'),
        fetch('./const/kpis.json')
      ])
      const [impressionsData, kpiData] = await Promise.all([
        impressions.json(),
        kpis.json()
      ])

      setData({ metrics, impressions: impressionsData, kpis: kpiData })
      // Simulate loading
      setTimeout(() => setLoading(false), 1000)
    } catch (error) {
      console.error('Error fetching metrics:', error)
      setLoading(false)
    }
  }

  /**
   * Calculate the summary of the impressions data
   */
  const summary = useMemo(() => {
    const { metrics, impressions } = data || {}
    if (!metrics || !impressions) return []

    return [
      {
        name: 'Impressions',
        value: impressions.reduce(
          (acc, impression) => acc + impression.impressions,
          0
        )
      },
      {
        name: 'Ad Requests',
        value: impressions.reduce(
          (acc, impression) => acc + impression.ad_requests,
          0
        )
      },
      {
        name: 'Revenue',
        value: impressions.reduce(
          (acc, impression) => acc + impression.revenue,
          0
        )
      }
    ]
  }, [data])

  return (
    <div className="relative h-full">
      {loading && (
        <div className="absolute inset-0 z-50 flex select-none items-center justify-center bg-white/50">
          <div className="size-32 animate-spin rounded-full border-y-2 border-gray-700" />
        </div>
      )}

      <h1
        id="usage-overview"
        className="my-4 scroll-mt-8 font-semibold text-white dark:text-gray-900 sm:text-2xl"
      >
        Overview
      </h1>

      <section className="w-full">
        <Revenue data={data?.metrics} />
      </section>

      <section className="flex flex-col flex-wrap gap-2 lg:flex-nowrap lg:gap-8">
        <div className="mt-8 flex flex-col gap-4">
          <Filters />
          <DailyKPICard data={data.kpis} />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex w-full lg:w-1/2">
            <CustomAreaChart
              categories={['impressions', 'ad_requests', 'revenue']}
              data={data.impressions}
              summary={summary}
              title="Follower metrics"
            />
          </div>
          <div className="flex w-full lg:w-1/2">
            <CustomBarList />
          </div>
        </div>
      </section>

      <footer className="mt-8">
        <UpgradeCTA />
      </footer>
    </div>
  )
}

export default Dashboard
