const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('add method is defined', () => {
        expect(add).toBeDefined();
      });
    
      test('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
      });
    
      test('returns number for single value', () => {
        expect(add('1')).toBe(1);
      });
    
      test('returns sum for two comma-separated numbers', () => {
        expect(add('1,5')).toBe(6);
      });
    
      test('returns sum for multiple numbers', () => {
        expect(add('1,2,3,4')).toBe(10);
      });
    
      test('handles newlines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
      });
    
      test('supports custom delimiter', () => {
        expect(add('//;\n1;2')).toBe(3);
      });
    
      test('throws on negative single number', () => {
        expect(() => add('-1')).toThrow('negative numbers not allowed -1');
      });
    
      test('throws on multiple negative numbers', () => {
        expect(() => add('-1,-2,3')).toThrow('negative numbers not allowed -1,-2');
      });
    
      test('throws error when input is undefined', () => {
        expect(() => add()).toThrow('Input is undefined');
      });
});