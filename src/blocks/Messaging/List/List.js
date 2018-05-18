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
        counters: {
            INFO: 0,
            WARNING: 0,
            ERROR: 0
        },
        isCounterFixed: false
    }

    counterClientRect = null
    counterListItemRect = null
    messagesList = []
    getFirstCount = false

    componentDidMount() {
        const counterClientRect = this.counterElem.getBoundingClientRect();
        window.addEventListener('scroll', this.windowScrollHandler, {
            passive: true
        });

        this.counterClientRect = counterClientRect;
    }

    windowScrollHandler = e => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop,
            {messages} = this.props,
            {counterClientRect, counterClientRect: {top}, counterListItemRect} = this;
        let {isCounterFixed} = this.state;

        if (scrollPosition >= top && !isCounterFixed) {
            isCounterFixed = true;
        } else if (scrollPosition < top && isCounterFixed) {
            isCounterFixed = false;
        }

        this.setState({isCounterFixed}, () => {
            if (counterClientRect && counterListItemRect && messages) {
                this.considerVisibleElements(scrollPosition);
            }
        });
    }

    componentDidUpdate() {
        const {counterClientRect, counterListItemRect, messagesList, getFirstCount} = this;
        if (!getFirstCount && counterClientRect && counterListItemRect && messagesList.length) {
            this.getFirstCount = true;
            this.considerVisibleElements(0);
        }
    }

    considerVisibleElements(scrollPosition = 0) {
        const {counterClientRect, counterListItemRect, messagesList} = this,
            intViewportHeight = window.innerHeight,
            messagesLength = messagesList.length,
            listHeight = messagesLength * counterListItemRect.height;

        let elemsPerPage = 0,
            startCountPosition = 0,
            viewPartOfList = intViewportHeight - counterListItemRect.top;

        if (scrollPosition <= counterClientRect.top) {
            viewPartOfList = viewPartOfList + scrollPosition;
        } else {
            viewPartOfList = intViewportHeight - counterClientRect.height;
            startCountPosition = Math.floor((listHeight - (listHeight - scrollPosition + counterClientRect.height)) / counterListItemRect.height);
        }

        elemsPerPage = Math.floor(viewPartOfList / counterListItemRect.height);

        this.countEventsByType(startCountPosition, startCountPosition + elemsPerPage);
    }

    countEventsByType(startCountPosition, endCountPosition) {
        const counters = {},
            {messagesList} = this;


        for (let i = startCountPosition, len = endCountPosition; i < len; ++i) {
            if (messagesList[i]) {
                let {id} = messagesList[i];

                if (counters[id]) {
                    counters[id] = ++counters[id];
                } else {
                    counters[id] = 1;
                }
            }
        }

        this.setState({counters});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.windowScrollHandler);
    }

    componentWillReceiveProps({messages}) {
        if (messages && !this.listItemRect) {
            this.messagesList = Object.values(messages);

            this.getListItemHeight();
        }
    }

    getListItemHeight() {
        const itemsCollections = document.getElementsByClassName('messages-list-item');

        if (itemsCollections.length) {
            this.counterListItemRect = itemsCollections[0].getBoundingClientRect();
        }
    }

    render() {
        const {counters: {INFO = 0, WARNING = 0, ERROR = 0}, isCounterFixed} = this.state,
            {counterClientRect, messagesList} = this,
            listStyle = {};

        let fixedCss = 'messaging-list';

        if (isCounterFixed) {
            fixedCss = `${fixedCss} ${fixedCss}--fixed`;
            listStyle.paddingTop = counterClientRect ? counterClientRect.height : 0;
        }

        return <div className={fixedCss}>
            <div
                ref={el => this.counterElem = el}
                key='counter'
                className='messaging-list__counters'>
                    <div className='messaging-list__counters-item'>
                        {`INFO: ${INFO}`}
                    </div>
                    <div className='messaging-list__counters-item'>
                        {`WARNING: ${WARNING}`}
                    </div>
                    <div className='messaging-list__counters-item'>
                        {`ERROR: ${ERROR}`}
                    </div>
            </div>
            <ul
                ref={el => this.counterList = el}
                style={listStyle}
                key='list'
                className='messaging-list__events'>
                {messagesList && messagesList
                    .map((value, index) => <MessagesListItem  tabIndex={++index} key={value.date} data={value}/>)}
            </ul>
        </div>;
    }
}

// For connetction redux store field to component
const mapStateToProps = (state) => {
    return {messages: state.messages};
}

export default connect(mapStateToProps)(List);
