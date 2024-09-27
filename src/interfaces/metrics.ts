export interface IMetrics {
  dailyImpressions: number
  ad_requests: number
  revenue: number
}

export interface IImpression {
  date: Date
  impressions: number
  ad_requests: number
  revenue: number
}

export interface IKPI {
  name: string
  stat: number
  change: number
  changeType: 'positive' | 'decrease'
}

export interface IDetailsData {
  id: string
  name: string
  description: string
  url: string
  script: string
}
