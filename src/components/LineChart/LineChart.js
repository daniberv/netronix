/**
 * Known issues:
 * Recharts has some problems and unpredictable behavior on rerendering
 */

import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const RenderLineChart = (props) => {
  return (
    <ResponsiveContainer width="100%" height={60} minWidth="0">
        <LineChart data={
            props.measurements.map(point => {
                return {
                    name: point[0],
                    value: point[1]
                }
            })
        }>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    </ResponsiveContainer>
  )
};

RenderLineChart.propTypes = {
    measurements: PropTypes.array
};

export default RenderLineChart;