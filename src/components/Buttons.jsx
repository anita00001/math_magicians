// Buttons.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Buttons.css';

function Buttons(props) {
  const { labels, onButtonClick } = props;

  const handleClick = (label) => {
    onButtonClick(label);
  };

  return (
    <div className="button-container">
      {labels.map((label) => {
        const uniqueKey = `button-${label}`;
        let buttonClass = '';
        if (label === '0') {
          buttonClass = 'zero';
        } else if (label === '÷') {
          buttonClass = 'oper-right';
        } else if (label === 'x') {
          buttonClass = 'oper-right';
        } else if (label === '-') {
          buttonClass = 'oper-right';
        } else if (label === '+') {
          buttonClass = 'oper-right';
        } else if (label === '=') {
          buttonClass = 'oper-right';
        } else {
          buttonClass = 'calc-panel';
        }
        return (
          <button
            key={uniqueKey}
            type="button"
            className={buttonClass}
            onClick={() => handleClick(label)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

Buttons.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Buttons;
