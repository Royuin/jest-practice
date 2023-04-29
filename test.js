import { capitalize, reverseString, calculator } from './script';

test('capitalize first letter', () => {
  expect(capitalize('foo')).toBe('Foo');
});

test('reverseString', () => {
  expect(reverseString('foo')).toBe('oof');
});

test('calculator addition', () => {
  expect(calculator.add(3, 7)).toBe(10);
});

test('calculator subraction', () => {
  expect(calculator.subtract(1000, 7)).toBe(993);
});
