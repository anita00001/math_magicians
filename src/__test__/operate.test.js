import operate from '../logic/operate';

describe('Operate fucntion test', () => {
  it('Plus First Number with Second Number', () => {
    expect(operate('10', '10', '+')).toBe('20');
    expect(operate('2', '5', '+')).not.toBe('6');
  });

  it('Minus First Number with Second Number', () => {
    expect(operate('10', '9', '-')).toBe('1');
    expect(operate('8', '9', '-')).not.toBe('1');
  });

  it('Multiply First Number with Second Number', () => {
    expect(operate('2', '4', 'x')).toBe('8');
    expect(operate('10', '5', 'x')).not.toBe('51');
  });
});
