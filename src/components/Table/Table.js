import { Fragment, Component } from 'react';
import LineChart from './../LineChart/LineChart';

class Table extends Component {
    /**
     * Show a string, last value or chart depending on record type
     * @param {String} name 
     * @param {Array} measurements 
     */
    renderMeasurements(name, measurements) {
        let component = null
    
        switch(name) {
          case 'Location':
            component = 'See the map'
            break;
          case 'Serial':
            component = measurements[measurements.length - 1]
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

    render() {
        return (
            <table className="App">
                <thead>
                <tr>
                    <td width="10%">ID</td>
                    <td width="17%">Name</td>
                    <td width="8%">Unit</td>
                    <td width="65%">Measurements</td>
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
                        <td>{ this.renderMeasurements(message.name, message.measurements) }</td>
                    </tr>
                    )
                })
                }
                </tbody>
            </table>
        )
    }
}

export default Table;