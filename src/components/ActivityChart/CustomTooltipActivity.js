import styles from './CustomTooltipActivity.module.scss'

/**
 * displaying the custom Tooltip of Activity Charts
 * @param {Boolean} active - Types of Active
 * @param {Array} payload - Types of Payload.
 */

export const CustomTooltipActivity = ({ active, payload }) => {
  console.log(active)
  console.log(payload)
  if (active && payload && payload.length > 0) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltip__content}>{`${payload[0].value}kg`}</p>
        <p className={styles.tooltip__content}>{`${payload[1].value}kCal`}</p>
      </div>
    )
  }

  return null
}
