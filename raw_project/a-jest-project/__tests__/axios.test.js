import request from '../utils/request.js'

const url = encodeURI(`http://autodev.openspeech.cn/csp/api/v2.1/weather?openId=aiuicus&clientType=android&sign=android&city=上海&needMoreData=true&pageNo=1&pageSize=7`)
// const url = `https://www.baidu.com`

describe('测试异步', () => {
  it('写法1', async function () {
    const res = await request({
      method : 'get',
      url    : url,
      headers: {
        'Content-Type': 'application/json',
      },
      // transformResponse: getTransformResponse('导出无赛事说明按条件{协会}出错了！')
      data: {},
    })

    // console.log(res)
    expect(Object.prototype.toString.call(res)).toBe('[object Object]')
  })

  it('写法2', function (done) {
    request({
      method : 'get',
      url    : url,
      headers: {
        'Content-Type': 'application/json',
      },
      // transformResponse: getTransformResponse('导出无赛事说明按条件{协会}出错了！')
      data: {},
    }).then((res) => {
      // expect.assertions(1)
      expect(Object.prototype.toString.call(res)).toBe('[object Object]')
      done()
    }).catch((err) => {
      console.error(err)
      done()
    })
  })

  it('写法3', function () {
    return request({
      method : 'get',
      url    : url,
      headers: {
        'Content-Type': 'application/json',
      },
      // transformResponse: getTransformResponse('导出无赛事说明按条件{协会}出错了！')
      data: {},
    }).then((res) => {
      // console.log(res)
      expect(Object.prototype.toString.call(res)).toBe('[object Object]')
    }).catch((err) => {
      console.error(err)
    })
  })

  it('写法4', function () {
    let promiseResponse = request({
      method : 'get',
      url    : url,
      headers: {
        'Content-Type': 'application/json',
      },
      // transformResponse: getTransformResponse('导出无赛事说明按条件{协会}出错了！')
      data: {},
    })

    // console.log('【axios.test.js:69】-:', Reflect.ownKeys(expect(promiseResponse).resolves));
    // console.log('【axios.test:69】',`expect(promiseResponse).resolves = `,expect(promiseResponse).resolves);
    return expect(promiseResponse).resolves.toBeTruthy()
  })
})

