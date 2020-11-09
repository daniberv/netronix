import { Fragment } from 'react';
import LineChart from './../LineChart/LineChart';
import PropTypes from 'prop-types';

const renderMeasurements = (name, measurements) => {
    let component = null

    switch(name) {
      case 'Location':
        component = 'See the map'
        break;
      case 'Serial':
        component = measurements[measurements.length - 1] ? measurements[measurements.length - 1][1] : '-';
        break;
      default:
        component = <LineChart measurements={measurements.slice(-5)} /> // Last 5 elements render only
        break;
    }

    return (
      <Fragment>
        {component}
      </Fragment>
    )
}

const Measurement = (props) => {
    return (
        renderMeasurements(props.name, props.measurements)
    )
};

Measurement.propTypes = {
    name: PropTypes.string,
    measurements: PropTypes.array
};

export default Measurement;