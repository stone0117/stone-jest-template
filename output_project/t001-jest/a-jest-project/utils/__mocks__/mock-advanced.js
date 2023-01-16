export const fetchData = () => {
  return new Promise((resolve, reject) => {
    // resolve({ data: `(function(){return '123'})()` })
    resolve(`(function(){return '123'})()`)
  })
}
