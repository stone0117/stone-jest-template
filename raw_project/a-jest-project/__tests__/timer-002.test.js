import timer from '../utils/timer-002.js'

describe('timer 测试', () => {

  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('t001', () => {
    const fn = jest.fn()
    timer(fn)
    // jest.runAllTimers()
    jest.runOnlyPendingTimers() // 只执行当前等待的定时器
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('t002', () => {
    const fn = jest.fn()
    timer(fn)
    // jest.runAllTimers()
    jest.advanceTimersByTime(7000) // 快进 7000 ms
    expect(fn).toHaveBeenCalledTimes(2)
  })
})




