import Person from './Person.js'

const createPerson = () => {
  let person = new Person()
  person.sleep()
  person.eat()
}

export default createPerson
