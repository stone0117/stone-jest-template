import axios from 'axios'

export const fetchData = () => {
  // return axios.get('/').then(res => res.data)
  return axios.get('http://jsonplaceholder.typicode.com/posts').then(res => res.data)
}

export const getPosts = () => {
  return axios.get('http://jsonplaceholder.typicode.com/posts').then(res => res.data)
}

