/** styles */
import styles from './PerformanceChart.module.scss'
/** PropTypes */
import PropTypes from 'prop-types'
/** recharts dependencies */
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
/** Componenent */
import { renderPolarAngleAxis } from './polarAngleAxis'

/**
 * Component displaying the performance chart of the user
 * @component
 * @param {Object} performanceData - Types of Performance Data
 * @param {Object} performanceData.kind - Performance name
 * @param {Array} performanceData.data - Types of Performance.
 * @param {Number} performanceData.data.value - Value of the data.
 * @param {Number} performanceData.kind - Number of the type performance.
 * @param {Array} kindNameFR - Translate name of each performance name
 * @returns {React.ReactElement} The performance chart
 */

export function PerformanceChart({ performanceData }) {
  var kindNameFR = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ]
  if (performanceData) {
    // Replace each name performance of his name in French
    performanceData.data.forEach((perf, i) => (perf.kindName = kindNameFR[i]))
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
  PerformanceChart.propTypes = {
    performanceData: PropTypes.shape({
      kind: PropTypes.object.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          kind: PropTypes.number.isRequired,
        })
      ).isRequired,
    }),
  }
}
