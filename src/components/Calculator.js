// Calculator.js
import Buttons from './Buttons';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calc-container">
      <Buttons labels={[
        'O/p',
        'AC', '+/-', '%', '/',
        '7', '8', '9', 'x',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '=',
      ]}
      />
    </div>
  );
}

export default Calculator;
