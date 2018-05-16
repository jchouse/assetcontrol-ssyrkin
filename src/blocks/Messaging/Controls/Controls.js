import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../Button/Button';
import './Controls.css';
import { addMessage } from '../../../actions';

const firebase = window.firebase;

class Controls extends Component {
    static defaultProps = {
        database: firebase.database(),
    }

    textMapping = {
        INFO: 'Some info message',
        WARNING: 'Some warning message of reversed',
        ERROR: 'Some error message'
    }

    clickHandler = (type) => {
        const {database} = this.props,
            updates = {},
            key = database.ref().child('messages').push().key,
            url = `/messages/${key}`,
            data = {
                date: new Date,
                text: this.textMapping[type],
                id: type
            };

        updates[url] = data;

        database
            .ref()
            .update(updates)
            .then(() => {
                this.props.addMessage({key, data});
            });
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

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
}

export default connect(() => ({}), mapDispatchToProps)(Controls);
