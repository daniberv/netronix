import React from 'react';
import { create  } from 'react-test-renderer';
import App from './App';

it('should returns correct JSON data', () => {
    const component = create(<App />);
    const instance = component.getInstance();

    const testJson = '[{"name":"Temperature","unit":"℃","measurements":[],"_id":"5fa147f828a23e00010be72b"}]';

    return expect(instance.validateReceivedData(testJson)).resolves.toStrictEqual(JSON.parse(testJson))
});

it('should returns record index', () => {
    const component = create(<App />);
    const instance = component.getInstance();

    const messages = [
        {
            _id: '11111',
            name: 'Location',
            unit: '',
            measurements: []
        },
        {
            _id: '22222',
            name: 'Serial',
            unit: '',
            measurements: []
        }
    ]

    const testItem = {
        _id: '22222',
        name: 'PM1',
        unit: '',
        measurements: []
    }

    instance.setState({
        messages: messages
    })

    return expect(instance.checkIfRecordExists(testItem)).resolves.toBeGreaterThan(-1);
});