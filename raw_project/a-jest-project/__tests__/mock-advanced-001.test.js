import {fetchData} from '../utils/mock-advanced.js'
import axios       from 'axios'
jest.mock('axios')

test('fetchData 测试', async () => {
  // expect().toBe();
  axios.get.mockResolvedValue({ data: `(function(){return '123'})()` })

  let data = await fetchData()
  console.log('【mock-advanced.test:11】', `data = `, data)
  expect(eval(data)).toEqual('123')
})
