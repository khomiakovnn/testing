import { detectPaymentSystem } from '../identer';

describe('detectPaymentSystem', () => {
  test('should detect VISA', () => {
    const result = detectPaymentSystem('4111111111111111');
    expect(result).toBe('VISA');
  });

  test('should detect MasterCard', () => {
    const result = detectPaymentSystem('5111111111111111');
    expect(result).toBe('MasterCard');
  });

  test('should detect American Express', () => {
    const result = detectPaymentSystem('341111111111111');
    expect(result).toBe('American Express');
  });

  test('should detect MIR', () => {
    const result = detectPaymentSystem('2200111111111111');
    expect(result).toBe('MIR');
  });

  test('should detect Diners Club', () => {
    const result = detectPaymentSystem('36111111111111');
    expect(result).toBe('Diners Club');
  });

  test('should detect JCB', () => {
    const result = detectPaymentSystem('3511111111111111');
    expect(result).toBe('JCB');
  });

  test('should detect UNKNOWN SYSTEM', () => {
    const result = detectPaymentSystem('1234567890123456');
    expect(result).toBe('UNKNOWN SYSTEM');
  });
});
