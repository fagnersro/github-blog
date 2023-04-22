import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const apiPost = axios.create({
  baseURL: 'https://api.github.com/search/',
})
