const interpret = require('./interpret')


test('G()(al)', () => {
  expect(interpret('G()(al)')).toBe('Goal');
});


test('"G()()()()(al)"', () => {
  expect(interpret("G()()()()(al)")).toBe('Gooooal');
});


test('(al)G(al)()()G', () => {
  expect(interpret('(al)G(al)()()G')).toBe('alGalooG');
});