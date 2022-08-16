const Calculator = require('./calculator');

describe('Add', () => {
  test('2+2=4', () => {
    //Arange
    const num1 = 1;
    const num2 = 2;

    //Act
    const calculator = new Calculator(num1, num2);
    const result = calculator.add(num1, num2);
    //Assert
    expect(result).toBe(3);
  });
});

describe('add', () => {
  test('5+5=10', () => {
    //Arrange
    const num1 = 5;
    const num2 = 5;

    //Act
    const calculation = new Calculator(num1, num2);
    const result = calculation.add(num1, num2);

    //Assert
    expect(result).toBe(10);
  });
});

describe('multiply', () => {
  test('4*2=8', () => {
    //Arrange
    const num1 = 4;
    const num2 = 2;

    //Act
    const multiply = new Calculator(num1, num2);
    const result = multiply.multiply(num1, num2);

    //Assert
    expect(result).toBe(8);
  });
});

describe('divide', () => {
  test('10/2=5', () => {
    //Arrange
    const num1 = 10;
    const num2 = 5;

    //Act
    const divide = new Calculator(num1, num2);
    const result = divide.divide(num1, num2);

    //Assert
    expect(result).toBe(2);
  });
});
