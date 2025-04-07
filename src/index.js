function toSnakeCase(str) {
    return str
      .replace(/\s+/g, '_')
      .toLowerCase();
  }

  function toKebabCase(str) {
    return str
      .replace(/\s+/g, '-')
      .toLowerCase();
  }
  
  module.exports = { toSnakeCase, toKebabCase };