import axios from 'axios'

/**
  Axios instance to send requests
*/
const API =  axios.create({
  baseURL: `http://localhost:3000/api`,
  timeout: 20000,
})
  
export default API
