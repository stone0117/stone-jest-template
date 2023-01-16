// jest.enableAutomock()
// jest.disableAutomock()

jest.mock('../utils/mock-advanced.js')
// jest.unmock('../utils/mock-advanced.js')

import {fetchData} from '../utils/mock-advanced.js'

const { getPosts } = jest.requireActual('../utils/mock-advanced.js')

describe('fetchData 测试', () => {
  it('fetchData', async function () {
    let data = await fetchData()
    console.log('【mock-advanced.test:11】', `data = `, data)
    expect(eval(data)).toEqual('123')
  })

  it('getPosts', async function () {
    const data = await getPosts()
    console.log('【mock-advanced-002.test:18】', `data = `, data)
    expect(data).toBeTruthy()
  })
})
