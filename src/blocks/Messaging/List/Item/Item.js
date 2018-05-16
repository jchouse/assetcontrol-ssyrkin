import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const MessagesListItem = ({data, tabIndex}) => {
    const {date, id, text} = data,
        dateO = new Date(date).toISOString(),
        // Formating date string
        dateSring = dateO
            // Seprating date and time
            .split('T').join(' ')
            // Remove
            .replace(/[A-Za-z]/g, '');

    return (
        <li tabIndex={tabIndex} className='messages-list-item'>
            <span className='messages-list-item__text'>
                {dateSring}
            </span>
            <span className='messages-list-item__text'>
                {id}
            </span>
            <span className='messages-list-item__text'>
                {text}
            </span>
        </li>
    );
}

MessagesListItem.propTypes = {
    type: PropTypes.string
}


export default MessagesListItem;
