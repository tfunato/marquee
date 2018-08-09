const calc = require('../../../app/model/usecase/calc')

test('adds 1 + 2 to equal 3', () => {
  expect(calc.sum(1, 2)).toBe(3)
})

test('sub 2 - 1 to equal 1', () => {
  expect(calc.sub(2, 1)).toBe(1)
})

test('multi 2 * 2 to equal 4', () => {
  expect(calc.multi(2, 2)).toBe(4)
})

test('div 2 / 2 to equal 0', () => {
  expect(calc.div(2, 2)).toBe(1)
})
test('div 0 / 2 to equal 0', () => {
  expect(calc.div(0, 2)).toBe(0)
})
test('div 1 / 0 to Error', () => {
  expect(() => calc.div(1, 0)).toThrow()
})
