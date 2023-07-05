// Buttons.js
import './Buttons.css';

function Buttons(prop) {
  const { labels } = prop;
  const keyCounter = 0;

  return (
    <div className="button-container">
      {labels.map((label) => {
        const uniqueKey = `button-${keyCounter + 1}`;
        let buttonClass = '';
        if (label === 'O/p') {
          buttonClass = 'output-field';
        } else if (label === '0') {
          buttonClass = 'zero';
        } else if (label === '/') {
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
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
