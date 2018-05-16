import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button
 *
 * React stateless function to create button
 */

const Button = ({children, type, ...otherProps}) => {
    let classArr = ['btn', type && `btn__${type}`];

    return (
        <button className={classArr.join(' ')} {...otherProps}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string
}


export default Button;
