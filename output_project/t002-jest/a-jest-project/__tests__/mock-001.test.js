import * as mmm from '../utils/mock.js'
import request  from '../utils/request.js'

// jest.mock('../utils/request.js', () => {
//   return jest.fn((...args) => {
//     console.log('【demo.test:6】', `args = `, args)
//     return Promise.resolve({
//       code   : 0,
//       data   : { results: [1, 2, 3] },
//       msg    : 'SUCCESS',
//       success: true,
//     })
//   })
// })
//
// jest.mock('../utils/mock.js', () => {
//   return {
//     runCallback : jest.fn((callback) => {
//       callback()
//     }),
//     createObject: jest.fn((itemClass) => {
//       new itemClass()
//     }),
//     getData     : jest.fn((...args) => {
//       return Promise.resolve({
//         code   : 0,
//         data   : { results: [1, 2, 3] },
//         msg    : 'SUCCESS',
//         success: true,
//       })
//     }),
//   }
// })

// jest.mock('../utils/mock.js', () => {
//   return {
//     runCallback,
//     createObject,
//     getData     : jest.fn((...args) => {
//       return Promise.resolve({
//         code   : 0,
//         data   : { results: [1, 2, 3] },
//         msg    : 'SUCCESS',
//         success: true,
//       })
//     }),
//   }
// })

// jest.mock('../utils/mock.js')

// mmm.getData = jest.fn((...args) => {
//   return Promise.resolve({
//     code   : 0,
//     data   : { results: [1, 2, 3] },
//     msg    : 'SUCCESS',
//     success: true,
//   })
// })

describe('jest mock', () => {
  it('test 001', function () {
    // const func = (() => {
    //   return 'hello'
    // })
    let func = jest.fn()
    // console.log('【mock.test.js:9】-:', Object.prototype.toString.call(func))
    // console.log('【demo.test:10】', `func = `, func)

    func.mockReturnValue('hello world')
    // func.mockReturnThis()

    mmm.runCallback(func)
    mmm.runCallback(func)

    expect(func).toBeCalled()
    expect(func.mock.calls.length).toBe(2)

    console.log('【demo.test:14】', `func.mock = `, func.mock)
  })

  it('test 002', function () {

    let func = jest.fn()

    mmm.createObject(func)

    expect(func).toBeCalled()

    console.log('【demo.test:31】', `func.mock = `, func.mock)
  })

  it('test 003', async function () {

    // request.get.mockResolvedValue({data: 'hello world'})

    let res = await mmm.getData()
    console.log('【demo.test:43】', `res = `, res)
  })

  it('test 004', async function () {
    let spy3Instance = jest.spyOn(mmm, 'getData')
    spy3Instance.mockReturnValue(Promise.resolve({
      code   : 0,
      data   : { results: [1, 2, 3] },
      msg    : 'SUCCESS',
      success: true,
    }))

    let data = await mmm.getData()

    console.log('【mock.test:109】', `data = `, data)

  })

  it('test 005', async function () {
    const func = jest.fn()

    mmm.getData = func

    func.mockImplementation(() => {
      return Promise.resolve({
        code   : 0,
        data   : { results: [1, 2, 3] },
        msg    : 'SUCCESS',
        success: true,
      })
    })

    let data = await mmm.getData()

    console.log('【mock.test:109】', `data = `, data)

  })
})
