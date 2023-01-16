test('object 测试', () => {
  const person = {
    name: 'stone',
    age : 25,
  }
  expect(person).toEqual({ age: 25, name: 'stone' }) // 顺序无关紧要
})

test('测试数组', () => {
  const hobbies = ['吃饭', '睡觉', '打豆豆']
  expect(hobbies).not.toEqual(['吃饭', '打豆豆', '睡觉']) // 顺序重要
})

test('测试Set', () => {
  const hobbies = new Set(['吃饭', '睡觉', '打豆豆'])
  expect(hobbies).toEqual(new Set(['吃饭', '打豆豆', '睡觉'])) // 顺序不重要
})
