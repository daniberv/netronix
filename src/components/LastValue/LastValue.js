import { Fragment } from 'react';
import AnimatedRender from './../AnimatedRender/AnimatedRender';
import PropTypes from 'prop-types';

/**
 * Render the last value for the certain record
 * @param {String} name 
 * @param {Array} measurements 
 */
const renderLastValueOfMeasurements = (name, measurements) => {
    let value = null

    switch(name) {
        case 'Location':
            value = 'See the map'
        break;
        case 'Serial':
            value = measurements[measurements.length - 1] !== undefined ? measurements[measurements.length - 1][1] : '-'
        break;
        default:
            value = measurements[measurements.length - 1] !== undefined ? measurements[measurements.length - 1][1] : '-'
        break;
    }

    return (
        <Fragment>
            <AnimatedRender value={value} />
        </Fragment>
    )
    }

const LastValue = (props) => {
    return (
        renderLastValueOfMeasurements(props.name, props.measurements)
    )
};

LastValue.propTypes = {
    name: PropTypes.string,
    measurements: PropTypes.array
};

export default LastValue;