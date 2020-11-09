import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import AnimatedRender from './../AnimatedRender/AnimatedRender';
import Measurement from './../Measurement/Measurement';

class Table extends Component {
    /**
     * Render the last value for the certain record
     * @param {String} name 
     * @param {Array} measurements 
     */
    renderLastValueOfMeasurements(name, measurements) {
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

    render() {
      return (
          <table className="App">
              <thead>
              <tr>
                <td width="10%">ID</td>
                <td width="17%">Name</td>
                <td width="8%">Unit</td>
                <td width="20%">Value</td>
                <td width="45%">Measurements</td>
              </tr>
              </thead>
              <tbody>
              {
              this.props.messages.reverse().map(message => {
                return (
                <tr key={`record_${message._id}`}>
                    <td className="short-cell" title={message._id}>{ message._id }</td>
                    <td><b>{ message.name }</b></td>
                    <td>{ message.unit }</td>
                    <td><b>{ this.renderLastValueOfMeasurements(message.name, message.measurements) }</b></td>
                    <td>
                      <Measurement
                        name={message.name}
                        measurements={message.measurements}
                      />
                    </td>
                </tr>
                )
              })
              }
              </tbody>
          </table>
      )
    }
}

Table.propTypes = {
  messages: PropTypes.array
};

export default Table;