import makeStack from '../src/stack.js';

test('Main stack test', () => {
  const stack = makeStack();
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});

/* у makeStack нет метода isEmpty
test('isEmpty', () => {
  const stack = makeStack();
  expect(stack.isEmpty()).toBe(true);
  stack.push('one');
  expect(stack.isEmpty()).toBe(false);
  stack.push('two');
  expect(stack.isEmpty()).toBe(false);
  expect(stack.isEmpty()).toBe(true);
});

test('pop in empty stack', () => {
  const stack = makeStack();
  // Вызов метода pop обернут в функцию
  // Иначе матчер не сможет перехватить исключение
  expect(() => stack.pop()).toThrow();
});
*/