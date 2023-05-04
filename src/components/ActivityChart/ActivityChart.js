/** styles */
import styles from './ActivityChart.module.scss'

import { CustomTooltipActivity } from './CustomTooltipActivity'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

/**
 * Component displaying the activity chart of the user
 * @param {Object} activityData - Types of Activity Data
 * @param {Array} activityData.sessions - Types of Activity Sessions.
 * @component
 * @returns {React.ReactElement} - Return a html for ActivityChart.js
 */

export function ActivityChart({ activityData }) {
  if (activityData) {
    const data = activityData.sessions.map((item, i) => ({
      ...item,
      id: i + 1,
    }))
    return (
      <div className={styles.container}>
        {activityData && (
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data}>
              <text x={5} y={15} className={styles.container__title}>
                Activité quotidienne
              </text>
              <CartesianGrid
                vertical={false}
                strokeDasharray="4 4"
                stroke="#9B9EAC"
              />
              <XAxis
                dataKey="id"
                axisLine={true}
                tickLine={false}
                stroke="#9B9EAC"
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                yAxisId="left"
                orientation="right"
                tickCount={3}
                domain={['dataMin -2', 'dataMax +1']}
              />
              <YAxis hide yAxisId="right" />
              <Tooltip
                wrapperStyle={{ outline: 'none' }}
                cursor={{ fill: 'gray', opacity: 0.3 }}
                content={
                  <CustomTooltipActivity active={true} payload={activityData} />
                }
                offset={30}
                allowEscapeViewBox={{ x: true }}
                position={{ y: 0 }}
              />
              <Legend
                align="right"
                verticalAlign="top"
                height={80}
                iconSize={14}
                iconType="circle"
                wrapperStyle={{ right: 30, top: 0 }}
              />
              <Bar
                dataKey="kilogram"
                barSize={8}
                radius={[10, 10, 0, 0]}
                yAxisId="left"
                className={styles.container__barKilo}
                name="Poids (kg)"
              />
              <Bar
                dataKey="calories"
                barSize={8}
                radius={[10, 10, 0, 0]}
                yAxisId="right"
                className={styles.container__barCalories}
                name="Calories brûlées (kCal)"
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    )
  }
}
