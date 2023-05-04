/** styles */
import styles from './ActivityChart.module.scss'
/** PropTypes */
import PropTypes from 'prop-types'
/** components */
import { CustomTooltipActivity } from './CustomTooltipActivity'
/** recharts dependencies */
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
 * @param {Date} activityData.sessions.day - Number of the day.
 * @param {Number} activityData.sessions.kilogram - Types of Sessions.
 * @param {Number} activityData.sessions.calories - Types of Sessions.
 * @param {Number} data - Id of each activity
 * @component
 * @returns {React.ReactElement} - Return a html for ActivityChart.js
 */

export function ActivityChart({ activityData }) {
  if (activityData) {
    //add id for put id in the name
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

ActivityChart.propTypes = {
  activityData: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.instanceOf(Date).isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  data: PropTypes.array,
}
