import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagingControls from './Controls/Controls';
import MessagingList from './List/List';
import { getMessages } from '../../actions';

const firebase = window.firebase;

/**
 * Messaging common component for log list with main logic
 */
class Messaging extends Component {
    static defaultProps = {
        database: firebase.database()
    }

    componentWillMount() {
        this.getMessages();
    }

    getMessages() {
        const {database} = this.props,
            messages = database.ref().child('messages');

        messages.once('value', dataSnapshot => {
            this.props.getMessages(dataSnapshot.val());
        });
    }

    render() {
        return (
            <div className='messaging'>
                <MessagingControls />
                <MessagingList />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (messages) => {
            dispatch(getMessages(messages))
        }
    }
}

export default connect(() => ({}), mapDispatchToProps)(Messaging);