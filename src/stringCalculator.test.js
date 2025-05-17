const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('add method is defined', () => {
    expect(typeof add).toBe('function');
  });
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });
});