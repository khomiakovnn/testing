// validator.test.js

import { validator } from '../validators';

describe('validator', () => {
  test('should return true for a valid VISA card number', () => {
    const result = validator('4916741512641634');
    expect(result).toBe(true);
  });

  test('should return true for a valid MasterCard number', () => {
    const result = validator('5143959635667748');
    expect(result).toBe(true);
  });

  test('should return true for a valid American Express number', () => {
    const result = validator('343341540500943');
    expect(result).toBe(true);
  });

  test('should return true for a valid MIR card number', () => {
    const result = validator('2202203644008767');
    expect(result).toBe(true);
  });

  test('should return true for a valid Diners Club card number', () => {
    const result = validator('5473838757101274');
    expect(result).toBe(true);
  });

  test('should return true for a valid JCB card number', () => {
    const result = validator('3540887784069891');
    expect(result).toBe(true);
  });

  test('should return false for an invalid card number', () => {
    const result = validator('1234567890123456');
    expect(result).toBe(false);
  });
});
