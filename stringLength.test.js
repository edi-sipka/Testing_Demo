const stringLength = require('./stringLength');

/*test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
*/

test('String is to long or empty', () => {
  //Arrange
  const string = 'Ediediediediediedi';

  //Act
  const result = () => stringLength(str);

  //assert
  expect(result).toThrow(Error);
});
