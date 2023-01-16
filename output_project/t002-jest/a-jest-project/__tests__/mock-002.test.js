import * as mockModule from '../utils/mock.js'

// 整个都被替换了, 也许能在 想要mock的模块里 引入了 运行不起来的模块的时候 这个有用
// jest.mock('../utils/mock.js', () => {
//   // 整体替换
//   return {
//
//   }
// })

describe('jest mock 测试', () => {
  // 这个方案 不太好, 侵入性太强了...
  // test('测试 001', async () => {
  //   let func           = jest.fn()
  //   // mockModule.getData = func
  //   func.mockImplementationOnce(() => {
  //     return Promise.resolve({
  //       code   : 0,
  //       data   : { results: [1, 2, 3] },
  //       msg    : 'SUCCESS',
  //       success: true,
  //     })
  //   })
  //   let res = await mockModule.getData()
  //   expect(res).toBeTruthy()
  // })

  test('测试 002', async () => {
    let func = jest.spyOn(mockModule, 'getData')
    func.mockReturnValueOnce(Promise.resolve({
      code   : 0,
      data   : { results: [3, 2, 1] },
      msg    : 'SUCCESS',
      success: true,
    }))

    let res = await mockModule.getData()
    console.log('【mock-002.test:42】', `res = `, res)
    expect(res).toBeTruthy()

  })

  test('测试 003', async () => {
    let res = await mockModule.getData()
    console.log('【mock-002.test:50】', `res = `, res)
    // expect(res).toBeTruthy()
  })
})
