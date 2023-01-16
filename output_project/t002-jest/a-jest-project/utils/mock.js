import request from '../utils/request.js'

const url = encodeURI(`http://autodev.openspeech.cn/csp/api/v2.1/weather?openId=aiuicus&clientType=android&sign=android&city=上海&needMoreData=true&pageNo=1&pageSize=7`)

export const runCallback  = (callback) => {
  callback()
}
export const createObject = (classItem) => {
  new classItem()
}

export const getData = () => {
  console.log('■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■')
  console.log('%c【mock:13】-:', "color:orange", "call getData");
  console.log('■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■')
  return request({
    method : 'get',
    url    : url,
    headers: {
      'Content-Type': 'application/json',
    },
    // transformResponse: getTransformResponse('导出无赛事说明按条件{协会}出错了！')
    data: {},
  })
}
