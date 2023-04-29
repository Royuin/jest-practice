import { capitalize } from './script';

test('capitalize first letter', () => {
  expect(capitalize('foo')).toBe('Foo');
});
