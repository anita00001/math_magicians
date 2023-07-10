// Calculator.js
import React from 'react';
import Buttons from './Buttons';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [output, setOutput] = React.useState('');
  const [calculatorData, setCalculatorData] = React.useState({});

  const handleButtonClick = (buttonLabel) => {
    const updatedData = calculate(calculatorData, buttonLabel);
    setCalculatorData(updatedData);

    if (buttonLabel === 'AC' || buttonLabel === '=') {
      setOutput(updatedData.total || '');
    } else if (buttonLabel === '+/-') {
      setOutput(updatedData.next || '');
    } else {
      setOutput((prevOutput) => prevOutput + buttonLabel);
    }
  };

  return (
    <div className="calc-wrapper">
      <div className="calc-container">
        <form>
          <input
            type="text"
            className="output-field"
            readOnly
            placeholder="0"
            value={output}
          />
        </form>
        <Buttons
          labels={[
            'AC', '+/-', '%', '÷',
            '7', '8', '9', 'x',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '0', '.', '=',
          ]}
          onButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default Calculator;
