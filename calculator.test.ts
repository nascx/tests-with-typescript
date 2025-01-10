import { Calculator } from "./calculator";

test('adds 1 + 2 to equal 3', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(5, 3)).toBe(2);
});