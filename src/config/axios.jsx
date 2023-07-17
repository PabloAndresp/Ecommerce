import axios from 'axios'

const backendUrlLocal = "http://localhost:3000"
const backendUrlProd = "https://api-5-04ph.onrender.com"
const axiosClient = axios.create( {
  baseURL: backendUrlProd
} )

export default axiosClient