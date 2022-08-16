const capitalizeString = require('./capitalize.js');

test('Capitalize', () => {
  //Arrange
  const str = 'emanuel';

  //Act
  const result = capitalizeString(str);

  //Assert
  expect(result).toBe('EMANUEL');
});
