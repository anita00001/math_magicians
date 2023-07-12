import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('updates the output field correctly when buttons are clicked', () => {
    const { getByText, getByPlaceholderText } = render(<Calculator />);

    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    const outputField = getByPlaceholderText('0');
    expect(outputField.value).toBe('3');
  });

  // snapshot test
  test('renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
