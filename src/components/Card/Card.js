/** styles */
import styles from './Card.module.scss'
/** PropTypes */
import PropTypes from 'prop-types'

/**
 * Component displaying cards with the user's nutrition data
 * @component
 * @param {number} value - The nutrition value
 * @param {string} name - The name of the nutrition value
 * @param {string} unit - The unit following the value
 * @param {string} image - The icon of the card
 * @param {string} color - The background color of the icon
 * @returns {React.ReactElement} A card component with the user's nutrition data
 */

export function Card({ value }) {
  const { count, name, unit, image, color } = value
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={`${name} icon`}
        className={[
          styles['card__image'],
          styles[`card__image--${color}`],
        ].join(' ')}
      />
      <div className={styles.card__text}>
        <h4 className={styles.card__text__value}>
          {count}
          {unit}
        </h4>
        <p className={styles.card__text__title}>{name}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
