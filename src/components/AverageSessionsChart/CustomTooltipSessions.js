/** styles */
import styles from './CustomTooltipSessions.module.scss'
/** PropTypes */
import PropTypes from 'prop-types'

/**
 * displaying the custom Tooltip of Average Sessions Charts
 * @param {Boolean} active - Types of Active
 * @param {Array} payload - Types of Payload.
 */

export const CustomTooltipSessions = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className={styles.tooltip}>
        <p
          className={styles.tooltip__content}
        >{`${payload[0].value}${payload[0].unit}`}</p>
      </div>
    )
  }
  return null
}

CustomTooltipSessions.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}
