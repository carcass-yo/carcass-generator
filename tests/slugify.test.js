const Carcass = require('..');

describe('slugify', () => {
  const fn = Carcass.slugify;

  it('should transform to lowercase', () => {
    expect(fn('UPPERCASE')).toBe('uppercase');
  });

  it('should replace spaces with dash', () => {
    expect(fn('lorem ipsum')).toBe('lorem-ipsum');
  });

  it('should do both', () => {
    expect(fn('Lorem Ipsum')).toBe('lorem-ipsum');
  });
});
