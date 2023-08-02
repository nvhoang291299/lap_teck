import axios from 'axios';

export const postLogin = async (request) => {
    const res = await axios.post("http://localhost:8080/auth/login", request);
    return res.data;
}