const { toSnakeCase } = require('../src/index');

test('toSnakeCase should convert string correctly', () => {
  expect(toSnakeCase('Hello World')).toBe('hello_world');
});
