import { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages : [],
      connectionState: false
    }
  }

  componentDidMount() {
    /**
     * 1. Connect to the WebSocket server
     * 2. Updates handling
     * 3. Error handling
     */
    let connection = new WebSocket('wss://jsdemo.envdev.io/ws');

    // Connection established
    connection.onopen = () => {
      this.setState({
        connectionState: true
      })
    };

    // Updates has been received
    connection.onmessage = evt => {
      this.validateReceivedData(evt.data)
        .then(data => {
          this.handleRecievedRecords(data)
        })
        .catch(e => {
          console.log('ERROR', e)
        })
    };

    // Connection problems occured
    connection.onerror = error => {
      this.setState({
        connectionState: false
      })
      console.log('WebSocket Error ' + error);
    };
  }

  /**
   * Validate incoming records
   * @param {JSON string} data 
   */
  validateReceivedData = (data) => {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }

  /**
   * Handle received records
   * @param {array} records 
   */
  handleRecievedRecords(records) {
    console.log(records)
  }

  render() {
    return (
      <div className="wrapper">
        Connection: {this.state.connectionState ? 'connected' : 'not connected'}
      </div>
    )
  }
}

export default App;
