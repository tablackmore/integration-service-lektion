const assert = require('assert');
const exampleModule = require('./example');

describe('example module', () => {
  describe('add()', () => {
    it('should add two numbers together', () => {
      // Given
      const a = 5;
      const b = 10;
      // When
      const result = exampleModule.add(a, b);
      // Then
      assert.equal(result, 15);
    });
  });
});
