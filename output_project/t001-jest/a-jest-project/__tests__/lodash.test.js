import _ from 'lodash'

test('lodash 测试', () => {
  {
    let val = ''
    expect(_.isEmpty(val)).toBe(true)
  }

  {
    let val = undefined
    expect(_.isEmpty(val)).toBe(true)
  }

  {
    let val = null
    expect(_.isEmpty(val)).toBe(true)
  }
})

test('lodash 测试数字的isEmpty', () => {
  {
    let val = 0
    expect(_.isEmpty(val)).toBe(true)
  }

  {
    let val = 1
    expect(_.isEmpty(val)).toBe(true)
  }

  {
    let val = NaN
    expect(_.isEmpty(val)).toBe(true)
  }
})
