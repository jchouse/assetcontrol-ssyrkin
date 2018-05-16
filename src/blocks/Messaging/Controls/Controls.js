import React, { Component } from 'react';
import Button from '../../Button/Button';
import './Controls.css';

const firebase = window.firebase;

/**
 * Group of button to adding event to log
 */
class Controls extends Component {
    static defaultProps = {
        database: firebase.database(),
    }

    // Messages types
    textMapping = {
        INFO: 'Some info message',
        WARNING: 'Some warning message of reversed',
        ERROR: 'Some error message'
    }

    // Trigger event for adding event to log
    clickHandler = (type) => {
        const {database} = this.props,
            updates = {},
            key = database.ref().child('messages').push().key,
            url = `/messages/${key}`,
            now = new Date(),
            data = {
                date: now.toString(),
                text: this.textMapping[type],
                id: type
            };

        updates[url] = data;

        database
            .ref()
            .update(updates);
    }

    render() {
        return (
            <div className='messaging-controls'>
                <div className='messaging-controls__row messaging-controls__row--buttons'>
                    <Button
                        tabIndex={-1}
                        onClick={this.clickHandler.bind(this, 'INFO')}>
                        info
                    </Button>
                    <Button
                        tabIndex={-1}
                        type='warning'
                        onClick={this.clickHandler.bind(this, 'WARNING')}>
                        warning
                    </Button>
                    <Button
                        tabIndex={-1}
                        type='error'
                        onClick={this.clickHandler.bind(this, 'ERROR')}>
                        error
                    </Button>
                </div>
            </div>
        );
    }
}

export default Controls;
