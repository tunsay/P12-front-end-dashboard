/** recharts dependencies */
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
/** styles */
import styles from './PerformanceChart.module.scss'

import { renderPolarAngleAxis } from './polarAngleAxis'

/**
 * Component displaying the performance chart of the user
 * @component
 * @param {Object} performanceData - Types of Performance Data
 * @param {Array} sessionsData.sessions - Types of Performance.
 * @returns {React.ReactElement} The performance chart
 */

export function PerformanceChart({ performanceData }) {
  if (performanceData) {
    const kindNameFR = [
      'Intensité',
      'Vitesse',
      'Force',
      'Endurance',
      'Energie',
      'Cardio',
    ]
    performanceData.data.forEach((perf, i) => (perf.kindName = kindNameFR[i]))
    console.log(performanceData)
    return (
      <div className={styles.container}>
        {performanceData && (
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart outerRadius={80} data={performanceData.data}>
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey={'kindName'}
                stroke="#FFFFFF"
                tickLine={false}
                tick={(props) => renderPolarAngleAxis(props)}
                fontSize={12}
              />
              <Radar
                name="Performance"
                dataKey={'value'}
                fill="#E60000"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        )}
      </div>
    )
  }
}
