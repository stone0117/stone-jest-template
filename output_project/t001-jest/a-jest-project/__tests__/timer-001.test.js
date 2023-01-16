import timer from '../utils/timer-001.js'

describe('timer 测试', () => {
  it('t001', function (done) {
    timer(() => {
      expect(1).toBe(1)
      done()
    })
  })
})
