jest.test

import addDivToBody from '../utils/jquery-utils.js'
import $            from 'jquery'

describe('jQuery 测试', () => {
  it('t001', () => {
    addDivToBody()
    addDivToBody()
    // console.log('【jquery-test-001.test:7】',`$(\"body\").find('div').length = `,$("body").find('div').length);
    // console.log('【jquery-test-001.test:13】',`window.location.href = `,window.location.href);
    // console.log('【jquery-test-001.test:14】',`window.navigator = `,window.navigator);

    expect($('body').find('div').length).toBe(2)

  })
})
