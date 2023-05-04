/** recharts dependencies */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
/** styles */
import styles from './AverageSessionsChart.module.scss'
/** components */
import { CustomTooltipSessions } from './CustomTooltipSessions'

/**
 * Component displaying the average sessions chart of the user
 * @param {Object} sessionsData - Types of Sessions Data
 * @param {Array} sessionsData.sessions - Types of Sessions.
 * @component
 * @returns {React.ReactElement} - Return a html for AverageSessionsChart.js
 */

export function AverageSessionsChart({ sessionsData }) {
  const dayLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  if (sessionsData) {
    sessionsData.sessions.map((item, i) => ({
      ...(item.day = dayLetter[i]),
    }))
  }
  if (sessionsData) {
    console.log(sessionsData)
    return (
      <div className={styles.container}>
        <h3 className={styles.container__title}>
          Durée moyenne des
          <br />
          sessions
        </h3>
        {sessionsData && (
          <ResponsiveContainer
            width="100%"
            height={200}
            className={styles.responsiveContainer}
          >
            <LineChart
              width={500}
              data={sessionsData.sessions}
              margin={{ top: 32, right: 0, bottom: 0, left: 0 }}
              className={styles.responsiveContainer__chart}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                padding={{ left: 20, right: 20 }}
                tick={{ fill: 'white', opacity: 0.6 }}
              />
              <YAxis
                hide={true}
                domain={['dataMin - 10', 'dataMax + 10']}
                dataKey="sessionLength"
              />

              <Tooltip
                wrapperStyle={{ outline: 'none' }}
                cursor={{ opacity: 0 }}
                content={
                  <CustomTooltipSessions active={true} payload={sessionsData} />
                }
              />

              <Line
                type="natural"
                dot={false}
                unit="min"
                dataKey={'sessionLength'}
                stroke="#FFFFFF"
                activeDot={{ r: 5 }}
                strokeWidth={2}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    )
  }
}
