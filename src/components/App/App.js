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
      try {
        const readyData = JSON.parse(data)
        resolve(readyData)
      } catch(e) {
        reject(e)
      }
    })
  }

  /**
   * Handle received records
   * @param {array} records 
   */
  handleRecievedRecords(records) {
    records.forEach(record => {
      // Check if the record already exists
      this.checkIfRecordExists(record)
        .then(recordIndexInMessages => {
          if(recordIndexInMessages === false) this.addNewRecordToMessages(record)
          else                                this.updateRecordInMessages(record, recordIndexInMessages)
        })
        .catch(e => {
          console.log(e)
        })
    });
  }

  /**
   * Check if the record already exists
   * @param {object} record 
   */
  checkIfRecordExists(record) {
    return new Promise((resolve, reject) => {
      const recordIdx = this.state.messages.findIndex(message => message._id === record._id)

      if(recordIdx !== -1) resolve(recordIdx)
      resolve(false)
    })
  }

  /**
   * Add the record to the messages
   * @param {object} record 
   */
  addNewRecordToMessages(record) {
    console.log(record)
  }

  /**
   * Update the record in case we already have it
   * @param {object} record 
   * @param {number} id 
   */
  updateRecordInMessages(record, id) {
    console.log(record, id)
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
