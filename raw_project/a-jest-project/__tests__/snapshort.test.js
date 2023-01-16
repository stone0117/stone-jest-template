import {generateAnotherConfig, generateConfig} from '../utils/snapshort'

describe('快照测试', () => {
  it('test 001', function () {
    expect(generateConfig()).toMatchSnapshot({
      time: expect.any(Date),
    })
  })

  it('test 002', function () {
    expect(generateAnotherConfig()).toMatchSnapshot({
      time: expect.any(Date),
    })
  })
})
