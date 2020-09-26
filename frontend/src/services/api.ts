import axios from 'axios'

const token:any = `Bearer ${sessionStorage.getItem("token")}`


const api = axios.create({
    baseURL: "http://0.0.0.0:3334",
    headers: {
       "Authorization": token
   }
})

export default api