import { Component } from 'react';
import PropTypes from 'prop-types';
import Measurement from './../Measurement/Measurement';
import LastValue from './../LastValue/LastValue';

class Table extends Component {
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
                    <td>
                      <b>
                        <LastValue
                          name={message.name}
                          measurements={message.measurements}
                        />
                      </b>
                    </td>
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