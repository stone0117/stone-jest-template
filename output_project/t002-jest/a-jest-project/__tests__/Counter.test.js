import Counter from '../utils/Counter.js'

describe('钩子函数', () => {
  let counter

  beforeAll(() => {
    console.log('%c【Counter.test:7】-:', 'color:orange', 'call beforeAll')
  })

  afterAll(() => {
    console.log('%c【Counter.test:11】-:', 'color:orange', 'call afterAll')
  })

  beforeEach(() => {
    console.log('%c【Counter.test:15】-:', 'color:orange', 'call beforeEach')
    counter = new Counter(10)
  })

  afterEach(() => {
    console.log('%c【Counter.test:19】-:', 'color:orange', 'call afterEach')
    counter = null
  })

  it('plus', function (done) {
    counter.plus(1)
    setTimeout(() => {
      expect(counter.number).toBe(11)
      done()
    }, 1000)
  })
  it('minus', function (done) {
    counter.minus(1)
    setTimeout(() => {
      expect(counter.number).toBe(9)
      done()
    }, 3000)
  })
})
