import axios from "axios"

export const getInfo = async () => {
    const res = await axios.get(`http://localhost:8080/info?email=${sessionStorage.getItem('EMAIL')}`)
    return res.data;
}