import { Text } from 'recharts'

/**
 * Renders a custom polar angle axis for the performance chart
 * @param {Object} props - Props object passed to the component
 * @param {Object} props.payload - The payload of the chart
 * @param {number} props.x - The x value
 * @param {number} props.y - The y value
 * @param {number} props.cx - The cx value
 * @param {number} props.cy - The cy value
 * @param {Object} props.rest - Any other props passed to the component
 * @returns {React.ReactNode} - A custom polar angle axis for the performance chart
 */
export function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 12}
      x={x + (x - cx) / 30}
    >
      {payload.value}
    </Text>
  )
}
