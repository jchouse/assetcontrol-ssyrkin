import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesListItem from './Item/Item';
import './List.css';

/**
 * List of events
 */
class List extends Component {
    static defaultProps = {
        messages: {}
    }

    state = {
        counters: {}
    }

    componentWillReceiveProps({messages}) {
        this.countEventsByType(messages);
    }

    countEventsByType(messages) {
        const counters = {};

        Object
            .values(messages)
            .forEach(({id}) => {
                if (counters[id]) {
                    counters[id] = ++counters[id];
                } else {
                    counters[id] = 1;
                }
            });

        this.setState({counters});
    }

    render() {
        const {messages} = this.props,
            {counters} = this.state;

        return <div className='messaging-list'>
            <div key='counter' className='messaging-list__counters'>
                {Object.entries(counters).map(([key, value]) => {
                    return <div key={key} className='messaging-list__counters-item'>
                        {`${key}: ${value}`}
                    </div>
                })}
            </div>
            <ul key='list' className='messaging-list__events'>
                {Object
                    .entries(messages)
                    .sort(([keyA, valueA], [keyB, valueB]) =>
                        new Date(valueA.date) - new Date(valueB.date))
                    .map(([key, value], index) => <MessagesListItem tabIndex={++index} key={key} data={value}/>)}
            </ul>
        </div>;
    }
}

// For connetction redux store field to component
const mapStateToProps = (state) => {
    return {messages: state.messages};
}

export default connect(mapStateToProps)(List);
