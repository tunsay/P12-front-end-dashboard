import { Text } from 'recharts'

/**
 * @description Renders a custom polar angle axis for the performance chart
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
