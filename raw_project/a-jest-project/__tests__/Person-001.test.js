jest.mock('../utils/Person.js')
import Person       from '../utils/Person.js'
import createPerson from '../utils/PersonUtils.js'

describe('测试 类的mock', () => {
  it('t001', () => {

    createPerson()

    expect(Person).toHaveBeenCalled()
    expect(Person.mock.instances[0].sleep).toHaveBeenCalled()
    expect(Person.mock.instances[0].eat).toHaveBeenCalled()
  })
})
