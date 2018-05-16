import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesListItem from './Item/Item';
import './List.css';

class List extends Component {
    static defaultProps = {
        messages: {}
    }

    render() {
        const {messages} = this.props;

        return (
            <ul className='messaging-list'>
                {Object
                    .entries(messages)
                    .sort(([keyA, valueA], [keyB, valueB]) =>
                        new Date(valueA.date) - new Date(valueB.date))
                    .map(([key, value], index) => <MessagesListItem tabIndex={++index} key={key} data={value}/>)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {messages: state.messages};
}

export default connect(mapStateToProps)(List);
