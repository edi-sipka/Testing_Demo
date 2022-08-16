const reverseString = require('./reverseString.js');

test('String is reversed', () => {
  //Arrange
  //const string = 'olleh';

  //Act
  //const result = () => reverseString(str);

  //assert
  expect(reverseString('hello')).toBe('olleh');
});
