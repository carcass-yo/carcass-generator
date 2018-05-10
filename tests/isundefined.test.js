const Carcass = require('..');

describe('isUndefined', () => {
  const fn = Carcass.isUndefined;

  it('should be false for string', () => {
    expect(fn('string')).toBe(false);
  });

  it('should be false for number', () => {
    expect(fn(123)).toBe(false);
  });

  it('should be false for boolean', () => {
    expect(fn(false)).toBe(false);
  });

  it('should be false for null', () => {
    expect(fn(null)).toBe(false);
  });

  it('should be false for object', () => {
    expect(fn({})).toBe(false);
  });

  it('should be false for array', () => {
    expect(fn([])).toBe(false);
  });

  it('should be true for undefined', () => {
    expect(fn(undefined)).toBe(true);
  });
});
