import { Component } from 'react';

class Table extends Component {
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
                        <td>{ JSON.stringify(message.measurements.reverse()) }</td>
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