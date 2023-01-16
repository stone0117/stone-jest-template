const { add, minus, multi } = require('../utils/math-node.js')

test('测试加法 3+7', () => {
  expect(add(3, 7)).toBe(10)
})

test('测试减法 3-7', () => {
  expect(minus(3, 7)).toBe(-4)

})

test('测试惩罚 3*7', () => {
  expect(multi(3, 7)).toBe(21)
})
