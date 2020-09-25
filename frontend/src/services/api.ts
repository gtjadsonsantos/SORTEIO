import axios from 'axios'

const token:any = sessionStorage.getItem("token")


const api = axios.create({
    baseURL: "http://0.0.0.0:3334",
    auth: token
})

export default api