import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('it should retrun an object with total and null when AC is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('it should return an Sum when = is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '=');

    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });
});
