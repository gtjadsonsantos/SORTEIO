import axios from 'axios'

const token:any = `Bearer ${sessionStorage.getItem("token")}`

export const URL = "http://0.0.0.0:3334"

const api = axios.create({
    baseURL: URL,
    headers: {
       "Authorization": token
   }
})

export default api