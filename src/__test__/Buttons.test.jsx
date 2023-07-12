import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Buttons from '../components/Buttons';

describe('Buttons', () => {
  const labels = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];
  const mockButtonClick = jest.fn();

  test('renders correctly', () => {
    const { container } = render(
      <Buttons labels={labels} onButtonClick={mockButtonClick} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('Call onButtonClick correctly when a button is clicked', () => {
    const { getByText } = render(
      <Buttons labels={labels} onButtonClick={mockButtonClick} />,
    );
    fireEvent.click(getByText('1'));
    expect(mockButtonClick).toHaveBeenCalledWith('1');
    expect(mockButtonClick).toHaveBeenCalledTimes(1);

    fireEvent.click(getByText('='));
    expect(mockButtonClick).toHaveBeenCalledWith('=');
    expect(mockButtonClick).toHaveBeenCalledTimes(2);
  });
});
