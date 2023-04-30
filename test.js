import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './script';

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

test('calculator division', () => {
  expect(calculator.divide(50, 2)).toBe(25);
});

test('calculator multiplication', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('caesar cipher with 1 shift', () => {
  expect(caesarCipher('we will breach the wall at dawn', 1)).toBe(
    'xf xjmm csfbdi uif xbmm bu ebxo'
  );
});

test('caesar cipher with 5 shift and wrapping from z to a', () => {
  expect(caesarCipher('we will breach the wall at dawn', 5)).toBe(
    'bj bnqq gwjfhm ymj bfqq fy ifbs'
  );
});

test('caesar cipher with punctuation', () => {
  expect(caesarCipher('we will breach the wall, at dawn!', 5)).toBe(
    'bj bnqq gwjfhm ymj bfqq, fy ifbs!'
  );
});

test('analyze array returning average of array given', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
}); 

test('analyze array returning key with minimum value of array given', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1); 
}); 