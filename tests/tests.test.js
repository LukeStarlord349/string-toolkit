const { toSnakeCase } = require('../src/index');

test('toSnakeCase should convert string correctly', () => {
  expect(toSnakeCase('Hello World')).toBe('hello_world');
});

const { toKebabCase } = require('../src/index');

test('toKebabCase should convert string correctly', () => {
  expect(toKebabCase('Hello World')).toBe('hello-world');
});

