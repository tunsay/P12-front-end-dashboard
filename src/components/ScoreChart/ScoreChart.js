/** styles */
import styles from './ScoreChart.module.scss'
/** PropTypes */
import PropTypes from 'prop-types'
/** recharts dependencies */
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

/**
 * Component displaying the score chart of the user
 * @component
 * @param {number} score - The score of the user (0-1)
 * @returns {React.ReactElement} The score chart
 */

export function ScoreChart({ score }) {
  // creates data for the chart
  score = score * 100
  const data = [
    {
      score: 100, // max score
      fill: 'white', // background color
    },
    {
      score: score, // current user score
      fill: '#E60000', // current score color
    },
  ]
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>Score</h3>
      <h4 className={styles.container__text}>
        {score}% <br />
        <span className={styles.container__text__span}>
          de votre
          <br /> objectif
        </span>
      </h4>
      {score && (
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart
            width={400}
            height={290}
            innerRadius="80%"
            barSize={10}
            outerRadius="80%"
            data={data}
            startAngle={90}
            endAngle={450}
          >
            <RadialBar
              background={{ fill: 'white' }}
              cornerRadius={5}
              max={100}
              dataKey="score"
              className={styles.container__bar}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
}
