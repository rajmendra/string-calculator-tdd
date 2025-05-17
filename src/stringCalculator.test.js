const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('add method is defined', () => {
    expect(typeof add).toBe('function');
  });
});