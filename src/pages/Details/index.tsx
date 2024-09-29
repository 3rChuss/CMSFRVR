import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import { TableNode } from '@table-library/react-table-library/types/table'
import { useLoader } from 'context/loaderContext'
import { FC } from 'react'
import colors from 'tailwindcss/colors'

// simulated data
const nodes = [
  {
    id: '1',
    name: 'ad-campaign-01.com',
    clicks: 1200,
    startDate: new Date('2024-09-01'),
    endDate: new Date('2024-09-15'),
    bounceRate: '45%',
    revenue: '1,200€',
    status: 'Active'
  },
  {
    id: '2',
    name: 'ad-campaign-02.com',
    clicks: 950,
    startDate: new Date('2024-08-25'),
    endDate: new Date('2024-09-10'),
    bounceRate: '50%',
    revenue: '950€',
    status: 'Paused'
  },
  {
    id: '3',
    name: 'ad-campaign-03.com',
    clicks: 700,
    startDate: new Date('2024-07-10'),
    endDate: new Date('2024-07-30'),
    bounceRate: '60%',
    revenue: '700€',
    status: 'Completed'
  },
  {
    id: '4',
    name: 'ad-campaign-04.com',
    clicks: 1800,
    startDate: new Date('2024-08-01'),
    endDate: new Date('2024-08-15'),
    bounceRate: '40%',
    revenue: '2,300€',
    status: 'Active'
  },
  {
    id: '5',
    name: 'ad-campaign-05.com',
    clicks: 500,
    startDate: new Date('2024-09-05'),
    endDate: new Date('2024-09-12'),
    bounceRate: '35%',
    revenue: '800€',
    status: 'Paused'
  },
  {
    id: '6',
    name: 'ad-campaign-06.com',
    clicks: 2200,
    startDate: new Date('2024-06-15'),
    endDate: new Date('2024-06-30'),
    bounceRate: '25%',
    revenue: '3,100€',
    status: 'Completed'
  },
  {
    id: '7',
    name: 'ad-campaign-07.com',
    clicks: 1300,
    startDate: new Date('2024-09-10'),
    endDate: new Date('2024-09-25'),
    bounceRate: '55%',
    revenue: '1,500€',
    status: 'Active'
  },
  {
    id: '8',
    name: 'ad-campaign-08.com',
    clicks: 1000,
    startDate: new Date('2024-08-15'),
    endDate: new Date('2024-08-31'),
    bounceRate: '48%',
    revenue: '1,100€',
    status: 'Completed'
  },
  {
    id: '9',
    name: 'ad-campaign-09.com',
    clicks: 1600,
    startDate: new Date('2024-07-20'),
    endDate: new Date('2024-08-05'),
    bounceRate: '30%',
    revenue: '2,000€',
    status: 'Completed'
  },
  {
    id: '10',
    name: 'ad-campaign-10.com',
    clicks: 750,
    startDate: new Date('2024-08-01'),
    endDate: new Date('2024-08-20'),
    bounceRate: '50%',
    revenue: '900€',
    status: 'Paused'
  }
]

// custom columns for table representation
const COLUMNS = [
  { label: 'Ad Campaign', renderCell: (item: TableNode) => item.name },
  {
    label: 'Start Date',
    renderCell: (item: TableNode) =>
      item.startDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
  },
  {
    label: 'End Date',
    renderCell: (item: TableNode) =>
      item.endDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
  },
  { label: 'Clicks', renderCell: (item: TableNode) => item.clicks },
  { label: 'Bounce Rate', renderCell: (item: TableNode) => item.bounceRate },
  { label: 'Revenue', renderCell: (item: TableNode) => item.revenue },
  {
    label: 'Status',
    renderCell: (item: TableNode) => {
      const statusColor = {
        Active: colors.green[500],
        Paused: colors.yellow[500],
        Completed: colors.red[500]
      }

      return (
        <span
          style={{
            color: statusColor[item.status as 'Active' | 'Paused' | 'Completed']
          }}
        >
          {item.status}
        </span>
      )
    }
  }
]

/**
 * Table with advertisement metrics.
 * It uses a custom theme for styling the table and its elements.
 * The component handles loading and no data states.
 *
 * @returns {JSX.Element} The rendered AdMetricsTable component.
 */
const AdMetricsTable: FC = () => {
  const { loading, noData } = useLoader()
  const theme = useTheme({
    Table: `
    color: ${colors.red[500]};
    background-color: transparent;
    `,
    Header: `
    color: ${colors.red[900]};
    background-color:transparent;
    `,
    BaseRow: `
    font-size: 16px;
    background-color: transparent;
  `,
    Row: `
    color: ${colors.slate[400]};
    background-color: transparent;

    &:hover {
      color: ${colors.blue[700]};
    }

    &:not(:last-of-type) > .td {
      border-bottom: 1px solid ${colors.gray[200]};
    }
  `,
    BaseCell: `
    padding: 6px 12px;
  `,
    HeaderCell: `
    font-weight: bold;
    border-bottom: 1px solid ${colors.gray[200]};
  `,
    Cell: `
    &:focus {
      outline: dotted;
      outline-width: 1px;
      outline-offset: -1px;
    }
  `
  })

  const data = { nodes }

  return (
    <div className="relative mt-4 size-full">
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-700/20">
          <div className="size-32 animate-spin rounded-full border-b-2 border-slate-100"></div>
        </div>
      )}
      <CompactTable
        columns={COLUMNS}
        data={
          noData
            ? {
                nodes: []
              }
            : data
        }
        theme={theme}
      />
      {noData && (
        <div className="mt-8 text-center text-gray-400">No data available</div>
      )}
    </div>
  )
}

export default AdMetricsTable
