import axios from "axios"


export const getHistory = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/history-order?email=${sessionStorage.getItem('EMAIL')}`);
    return res.data
    } catch (error) {
        console.log(error);
    }
    
} 